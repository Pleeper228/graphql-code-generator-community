/* eslint-disable @typescript-eslint/no-explicit-any */
import fastDeepEqual from 'fast-deep-equal';
import { GraphQLContext, GraphQLRequest, RequestHandler, ResponseResolver } from 'msw';
import { Arguments } from 'tsdef';
import * as Handlers from './handlers';

export const namedOperationHandlers = {
  User: Handlers.mockUserQuery,
  UpdateUser: Handlers.mockUpdateUserMutation,
} as const;

export type NamedHandlerMap<T extends string = string> = Record<
  T,
  (resolver: ResponseResolver<any, any, any>) => any
>;

export type ExtractNamedOperationVariables<T extends NamedHandlerMap> = {
  [P in keyof T]: T[P] extends (
    resolver: ResponseResolver<GraphQLRequest<infer U>, GraphQLContext<any>, any>,
  ) => any
    ? U
    : never;
};

export type ExtractNamedOperationData<T extends NamedHandlerMap> = {
  [P in keyof T]: T[P] extends (
    resolver: ResponseResolver<GraphQLRequest<any>, GraphQLContext<infer U>, any>,
  ) => any
    ? U
    : never;
};

type NamedOperationHandlers = typeof namedOperationHandlers;
type NamedOperationVariables = ExtractNamedOperationVariables<NamedOperationHandlers>;
type NamedOperationData = ExtractNamedOperationData<NamedOperationHandlers>;

interface EngineResponse<T extends keyof NamedOperationHandlers> {
  data: NamedOperationData[T] | null;
}
interface EngineMatchesFn<T extends keyof NamedOperationHandlers> {
  matches(handler: (req: EngineRequest<T>) => boolean): EngineResponseFn<T>;
  matches(req: EngineRequest<T>): EngineResponseFn<T>;
}

interface EngineRequest<T extends keyof NamedOperationHandlers> {
  variables: NamedOperationVariables[T];
}

interface EngineResponseFn<T extends keyof NamedOperationHandlers> {
  response(handler: (req: EngineRequest<T>) => EngineResponse<T>): void;
  response(res: EngineResponse<T>): void;
}

interface AdcEngine {
  when<T extends keyof NamedOperationHandlers>(operationName: T): EngineMatchesFn<T>;
}

interface MockedOperation<T extends keyof NamedOperationHandlers> {
  /** check if the request matches  */
  matcher(req: EngineRequest<T>): boolean;

  /** build the response for the request */
  responder(req: EngineRequest<T>): EngineResponse<T>;
}

class MockAdcEngine implements AdcEngine {
  namedHandlers: NamedOperationHandlers;
  mockedOperationsMap: {
    [P in keyof NamedOperationHandlers]: MockedOperation<P>[];
  };

  constructor(namedHandlers: NamedOperationHandlers) {
    this.namedHandlers = namedHandlers;

    let mockedOperationsMap = {} as any;
    Object.keys(namedHandlers).forEach(operationName => {
      mockedOperationsMap[operationName] = [];
    });
    this.mockedOperationsMap = mockedOperationsMap;
  }
  when<K extends keyof NamedOperationHandlers>(operationName: K): EngineMatchesFn<K> {
    let matcher: (req: EngineRequest<K>) => boolean;
    let responder: (req: EngineRequest<K>) => EngineResponse<K>;

    const responseFn = (arg: any) => {
      if (typeof arg === 'function') {
        responder = arg;
      } else {
        responder = () => arg;
      }
      this.mockedOperationsMap[operationName].push({
        matcher,
        responder,
      });
    };
    const matchesFn = (arg: any) => {
      if (typeof arg === 'function') {
        matcher = arg;
      } else {
        matcher = (req: any) => fastDeepEqual(req.variables, arg.variables);
      }
      return {
        response: responseFn,
      };
    };
    return { matches: matchesFn } as EngineMatchesFn<K>;
  }

  reset() {
    let mockedOperationsMap = {} as any;
    Object.keys(this.namedHandlers).forEach(operationName => {
      mockedOperationsMap[operationName] = [];
    });
    this.mockedOperationsMap = mockedOperationsMap;
  }

  getHandlers(): RequestHandler[] {
    return Object.entries(this.namedHandlers).map(([operationName, handler]) => {
      return handler((req, res, ctx) => {
        return this.handleOperation(req, res, ctx, operationName as keyof NamedOperationHandlers);
      });
    });
  }

  handleOperation(
    req: GraphQLRequest<any>,
    res: Arguments<ResponseResolver<any>>[1],
    ctx: GraphQLContext<any>,
    operationName: keyof NamedOperationHandlers,
  ) {
    const mockedOperations = this.mockedOperationsMap[operationName];
    const matchedMock = mockedOperations.find(mock => {
      return mock.matcher(req);
    });

    if (matchedMock) {
      return res(ctx.data(matchedMock.responder(req).data));
    } else {
      return this.handleMockNotFound(req, res, ctx);
    }
  }

  handleMockNotFound(
    req: GraphQLRequest<any>,
    res: Arguments<ResponseResolver<any>>[1],
    ctx: GraphQLContext<any>,
  ) {
    const message = `[${req.operationName}]: No mocks match the incoming request`;
    console.group(message);
    console.dir(req.variables);
    console.groupEnd();
    return res(ctx.errors([{ message: message }]));
  }
}

export const engine = new MockAdcEngine(namedOperationHandlers);
