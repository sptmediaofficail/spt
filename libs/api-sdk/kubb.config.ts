import { defineConfig } from '@kubb/core';
import { pluginSwr } from '@kubb/swagger-swr';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTs } from '@kubb/swagger-ts';

const swr = pluginSwr({
  output: {
    path: './hooks',
  },
  group: { type: 'tag', output: './hooks/{{tag}}Controller' },
});

export default defineConfig(() => {
  return {
    root: '.',
    plugins: [pluginOas(), pluginTs(), swr],
    input: {
      path: 'libs/api-sdk/openapi-spec.yml',
    },
    output: {
      path: 'libs/api-sdk/src/lib/gen',
      clean: true,
    },
  };
});
