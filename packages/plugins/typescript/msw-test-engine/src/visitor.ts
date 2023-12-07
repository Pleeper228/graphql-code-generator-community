import autoBind from 'auto-bind';
import { GraphQLSchema } from 'graphql';
import {
  ClientSideBaseVisitor,
  getConfigValue,
  LoadedFragment,
} from '@graphql-codegen/visitor-plugin-common';
import { MSWTestEnginePluginConfig, MSWTestEngineRawPluginConfig } from './config';
import { engineStr } from './engineStr';

export class MSWTestEngineVisitor extends ClientSideBaseVisitor<
  MSWTestEngineRawPluginConfig,
  MSWTestEnginePluginConfig
> {
  // private _externalImportPrefix: string;

  constructor(
    schema: GraphQLSchema,
    fragments: LoadedFragment[],
    rawConfig: MSWTestEngineRawPluginConfig,
  ) {
    super(schema, fragments, rawConfig, { link: getConfigValue(rawConfig.link, undefined) });

    autoBind(this);

    // this._externalImportPrefix = this.config.importOperationTypesFrom
    //   ? `${this.config.importOperationTypesFrom}.`
    //   : '';
  }

  public getImports(): string[] {
    const hasOperations = this._collectedOperations.length > 0;

    if (!hasOperations) {
      return [];
    }

    return [
      'import fastDeepEqual from "fast-deep-equal";',
      'import { GraphQLError } from "graphql";',
      'import { graphql, GraphQLContext, GraphQLHandler, GraphQLRequest, ResponseResolver } from "msw";',
      'import { Arguments } from "tsdef";',
      'import { namedOperations } from "./named";',
    ];
  }

  public getContent(): string {
    return engineStr;
  }
}
