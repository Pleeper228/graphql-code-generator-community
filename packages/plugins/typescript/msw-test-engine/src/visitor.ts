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
  `mock${pascalCase(value)}${operationType}`;

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
    super(schema, fragments, rawConfig, { link: getConfigValue(rawConfig.link, undefined) });

    autoBind(this);
  }

  public getImports(): string[] {
    const hasOperations = this._collectedOperations.length > 0;

    if (!hasOperations) {
      return [];
    }

    const handlers = this._operationsToInclude.map(({ node, operationType }) =>
      formatHandler(node.name.value, operationType),
    );

    return [
      'import fastDeepEqual from "fast-deep-equal";',
      'import { GraphQLError } from "graphql";',
      'import { graphql, GraphQLContext, GraphQLHandler, GraphQLRequest, ResponseResolver } from "msw";',
      'import { Arguments } from "tsdef";',
      `import { ${handlers.join(', ')} } from "./handlers"`,
      'import { namedOperations } from "./named";',
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
    }`;

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
