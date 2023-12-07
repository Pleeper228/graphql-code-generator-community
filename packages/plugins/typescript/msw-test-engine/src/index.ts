import { concatAST, FragmentDefinitionNode, Kind } from 'graphql';
import { oldVisit, PluginFunction, Types } from '@graphql-codegen/plugin-helpers';
import { LoadedFragment } from '@graphql-codegen/visitor-plugin-common';
import { MSWTestEngineRawPluginConfig } from './config';
import { MSWTestEngineVisitor } from './visitor';

export const plugin: PluginFunction<MSWTestEngineRawPluginConfig, Types.ComplexPluginOutput> = (
  schema,
  documents,
  config,
) => {
  const allAst = concatAST(documents.map(v => v.document));
  const allFragments: LoadedFragment[] = [
    ...(
      allAst.definitions.filter(
        d => d.kind === Kind.FRAGMENT_DEFINITION,
      ) as FragmentDefinitionNode[]
    ).map(fragmentDef => ({
      node: fragmentDef,
      name: fragmentDef.name.value,
      onType: fragmentDef.typeCondition.name.value,
      isExternal: false,
    })),
    ...(config.externalFragments || []),
  ];

  const visitor = new MSWTestEngineVisitor(schema, allFragments, config);
  oldVisit(allAst, { leave: visitor });

  return {
    prepend: ['/* eslint-disable @typescript-eslint/no-explicit-any */', ...visitor.getImports()],
    content: visitor.getContent(),
  };
};
