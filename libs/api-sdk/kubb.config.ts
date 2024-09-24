import { defineConfig } from '@kubb/core';
import { pluginSwr } from '@kubb/swagger-swr';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTs } from '@kubb/swagger-ts';
import { pluginClient } from '@kubb/swagger-client';

const swr = pluginSwr({
  output: {
    path: './hooks',
  },
  group: { type: 'tag', output: './hooks/{{tag}}Controller' },
});

const client = pluginClient({
  output: {
    path: './src/lib/client',
  },
});

export default defineConfig(() => {
  return {
    root: '.',
    plugins: [pluginOas(), pluginTs(), swr, client],
    input: {
      path: 'libs/api-sdk/openapi-spec.yml',
    },
    output: {
      path: 'libs/api-sdk/src/lib/gen',
      clean: true,
    },
  };
});
