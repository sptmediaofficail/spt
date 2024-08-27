import { defineConfig } from '@kubb/core';
import { pluginSwr } from '@kubb/swagger-swr';

export default defineConfig(() => {
  return {
    root: '.',
    input: {
      path: './openapi-spec.yml',
    },
    output: {
      path: './src/gen',
      clean: true,
    },
  };
});

const plugin = pluginSwr({
  output: {
    path: './hooks',
  },
  group: { type: 'tag', output: './hooks/{{tag}}Controller' },
});
