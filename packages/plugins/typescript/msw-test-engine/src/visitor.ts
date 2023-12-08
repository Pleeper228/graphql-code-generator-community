import autoBind from 'auto-bind';
import { pascalCase } from 'change-case-all';
import { GraphQLSchema, OperationDefinitionNode, print } from 'graphql';
import {
  ClientSideBaseVisitor,
  getConfigValue,
  LoadedFragment,
} from '@graphql-codegen/visitor-plugin-common';
import { MSWTestEnginePluginConfig, MSWTestEngineRawPluginConfig } from './config';
import { engineStr } from './engineStr';

const formatHandler = (value: string, operationType: string) =>
  `Handlers.mock${pascalCase(value)}${operationType}`;

export class MSWTestEngineVisitor extends ClientSideBaseVisitor<
  MSWTestEngineRawPluginConfig,
  MSWTestEnginePluginConfig
> {
  private _operationsToInclude: {
    node: OperationDefinitionNode;
    documentVariableName: string;
    operationType: string;
  }[] = [];

  constructor(
    schema: GraphQLSchema,
    fragments: LoadedFragment[],
    rawConfig: MSWTestEngineRawPluginConfig,
  ) {
    super(schema, fragments, rawConfig, {
      handlersPath: getConfigValue(rawConfig.handlersPath, undefined),
    });

    autoBind(this);
  }

  public getImports(): string[] {
    const hasOperations = this._collectedOperations.length > 0;

    if (!hasOperations) {
      return [];
    }

    return [
      'import fastDeepEqual from "fast-deep-equal";',
      'import { GraphQLContext, GraphQLRequest, RequestHandler, ResponseResolver } from "msw";',
      'import { SetupServer } from "msw/node";',
      'import { Arguments } from "tsdef";',
      `import * as Handlers from "${this.config.handlersPath}"`,
    ];
  }

  public getContent(): string {
    const namedOperationHandlersStr = `export const namedOperationHandlers = {
      ${this._operationsToInclude
        .map(
          ({ node, operationType }) =>
            `'${node.name.value}': ${formatHandler(node.name.value, operationType)},`,
        )
        .join('\n')}
    } as const`;

    return [namedOperationHandlersStr, engineStr].join('\n');
  }

  buildOperation(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationType: string,
  ) {
    if (node.name == null) {
      throw new Error(
        "Plugin 'msw-test-engine' cannot generate mocks for unnamed operation.\n\n" + print(node),
      );
    } else {
      this._operationsToInclude.push({
        node,
        documentVariableName,
        operationType,
      });
    }

    return null;
  }
}
