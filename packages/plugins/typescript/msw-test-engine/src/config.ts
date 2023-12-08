import {
  ClientSideBasePluginConfig,
  RawClientSideBasePluginConfig,
} from '@graphql-codegen/visitor-plugin-common';

/**
 * @description This plugin generates `msw` (https://github.com/mswjs/msw) mock handlers with TypeScript typings.
 */
export interface MSWTestEngineConfig {
  /**
   * @description Required, should point to the module that contains all generated msw handlers
   *
   * @exampleMarkdown
   * ```ts filename="codegen.ts" {10}
   *  import type { CodegenConfig } from '@graphql-codegen/cli';
   *
   *  const config: CodegenConfig = {
   *    // ...
   *    generates: {
   *      'path/to/file.ts': {
   *        // plugins...
   *        config: {
   *          handlersPath: '../queries'
   *        },
   *      },
   *    },
   *  };
   *  export default config;
   * ```
   */
  handlersPath: string;
}

export interface MSWTestEngineRawPluginConfig
  extends RawClientSideBasePluginConfig,
    MSWTestEngineConfig {}
export interface MSWTestEnginePluginConfig
  extends ClientSideBasePluginConfig,
    MSWTestEngineConfig {}
