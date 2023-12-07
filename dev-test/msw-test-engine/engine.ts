/* eslint-disable @typescript-eslint/no-explicit-any */
import fastDeepEqual from 'fast-deep-equal';
import { GraphQLError } from 'graphql';
import { graphql, GraphQLContext, GraphQLHandler, GraphQLRequest, ResponseResolver } from 'msw';
import { Arguments } from 'tsdef';
import { namedOperations } from './named';

type NamedQueryOperations = keyof typeof namedOperations.Query;
type NamedMutationOperations = keyof typeof namedOperations.Mutation;
type AnyData = Record<string, any>;
type AnyVariables = Record<string, any>;

export interface MockOperationController<TData extends AnyData, TVariables extends AnyVariables> {
  /**
   * When the incoming request matches `req`.
   *
   * TODO: Accept a callback that receives the request and returns a boolean if it should match.
   */
  when(req: { variables: TVariables }): {
    /**
     * Then respond with `data` / `errors`.
     *
     * TODO: Accept a callback that receives the request and returns data or errors.
     */
    then: (res: { data: TData | null; errors?: MockedOperation['errors'] }) => void;
  };

  /** Specify the request and response */
  mock(matcher: MockedOperation<TData, TVariables>): void;

  /** The handler to use in the mock server */
  handler(): GraphQLHandler<GraphQLRequest<TVariables>>;

  reset(): void;

  operationName: string;

  mockedOperations: MockedOperation<TData, TVariables>[];
}

export interface MockedOperation<
  TData extends AnyData = AnyData,
  TVariables extends AnyVariables = AnyVariables,
> {
  /** When the request variables match `variables`, return `data` or `errors`  */
  variables: TVariables;

  /** If `variables` matches, return `data` */
  data: TData | null;

  /** If `variables` matches, return `errors` */
  errors?: Pick<GraphQLError, 'message'>[];
}

/**
 * Build a {@link MockOperationController} for a mutation
 *
 * @example
 *
 * _Mocking a mutation in a test_
 *
 * ```typescript
 * const myMock = mockMutation<MyMutation, MyMutationVariables>(namedOperations.Mutation.MyMutation);
 * beforeEach(() => {
 *   myMock.reset();
 *   mockServer.use(myMock.handler());
 * });
 * it("...", () => {
 *   myMock
 *     .when({ variables: { id: "1" } })
 *     .then({ data: { myMutation: { id: "1" }});
 * });
 * ```
 */
export function buildMockMutationController<TData extends AnyData, TVariables extends AnyVariables>(
  operationName: NamedMutationOperations,
): MockOperationController<TData, TVariables> {
  return buildMockOperationController(operationName);
}

/**
 * Build a {@link MockOperationController} for a query
 *
 * @example
 *
 * _Mocking a query in a test_
 *
 * ```typescript
 * const myMock = mockQuery<MyQuery, MyQueryVariables>(namedOperations.Query.MyQuery);
 * beforeEach(() => {
 *   myMock.reset();
 *   mockServer.use(myMock.handler());
 * });
 * it("...", () => {
 *   myMock
 *     .when({ variables: { id: "1" } })
 *     .then({ data: { myQuery: { id: "1" }});
 * });
 * ```
 */
export function buildMockQueryController<TData extends AnyData, TVariables extends AnyVariables>(
  operationName: keyof typeof namedOperations.Query,
): MockOperationController<TData, TVariables> {
  return buildMockOperationController(operationName);
}

function buildMockOperationController<TData extends AnyData, TVariables extends AnyVariables>(
  operationName: NamedQueryOperations | NamedMutationOperations,
): MockOperationController<TData, TVariables> {
  const isQuery = namedOperations.Query[operationName as NamedQueryOperations] !== undefined;
  return {
    operationName,
    mockedOperations: [],
    mock(mock: MockedOperation<TData, TVariables>) {
      this.mockedOperations.push(mock);
    },
    when(req) {
      return {
        then: res => {
          this.mockedOperations.push({ ...req, ...res });
        },
      };
    },
    reset() {
      this.mockedOperations = [];
    },
    handler() {
      if (isQuery) {
        return graphql.query<TData, TVariables>(this.operationName, (req, res, ctx) => {
          return handleOperation(req, res, ctx, this.mockedOperations);
        });
      } else {
        return graphql.mutation<TData, TVariables>(this.operationName, (req, res, ctx) => {
          return handleOperation(req, res, ctx, this.mockedOperations);
        });
      }
    },
  };
}

type ResponseResolverArgs = Arguments<ResponseResolver<any>>;
const handleOperation = (
  req: GraphQLRequest<any>,
  res: ResponseResolverArgs[1],
  ctx: GraphQLContext<any>,
  mockedOperations: MockedOperation[],
) => {
  const matchedMock = mockedOperations.find(mock => {
    return fastDeepEqual(mock.variables, req.variables);
  });
  if (matchedMock) {
    if (matchedMock.errors) {
      return res(ctx.errors(matchedMock.errors));
    }
    return res(ctx.data(matchedMock.data));
  }

  return handleMockNotFound(req, res, ctx, mockedOperations);
};

const handleMockNotFound = (
  req: GraphQLRequest<any>,
  res: ResponseResolverArgs[1],
  ctx: GraphQLContext<any>,
  mockedOperations: MockedOperation[],
) => {
  const mockStrings = [];
  function indent(str: string) {
    return `  ${str.replace(/\n/g, '\n  ')}`;
  }
  for (const mock of mockedOperations) {
    mockStrings.push(indent(JSON.stringify(mock.variables, null, 2)));
  }

  const message = `[${req.operationName}]: No mocks match the incoming request variables =>`;
  console.group(message);
  console.dir(req.variables);
  console.log('Expected =>');
  mockedOperations.forEach((mock, i) => {
    if (i !== 0) {
      console.log('OR =>');
    }
    console.dir(mock.variables);
  });
  console.groupEnd();
  return res(ctx.errors([{ message: message }]));
};
