export const engineStr = `
export type NamedHandlerMap<T extends string = string> = Record<T, (resolver: ResponseResolver<any, any, any>) => any>;

export type ExtractNamedOperationVariables<T extends NamedHandlerMap> = {
  [P in keyof T]: T[P] extends (resolver: ResponseResolver<GraphQLRequest<infer U>, GraphQLContext<any>, any>) => any
    ? U
    : never;
};

export type ExtractNamedOperationData<T extends NamedHandlerMap> = {
  [P in keyof T]: T[P] extends (resolver: ResponseResolver<GraphQLRequest<any>, GraphQLContext<infer U>, any>) => any
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

export function setupEngine(mockServer: SetupServer, namedHandlers: NamedHandlerMap): AdcEngine {
  return {} as AdcEngine;
}`;
