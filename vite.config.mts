import { builtinModules } from 'node:module';

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'node22',
    sourcemap: true,
    minify: false,
    lib: {
      entry: 'src/extension.ts',
      formats: ['cjs'],
      fileName: () => 'extension.js',
    },
    rollupOptions: {
      platform: 'node',
      // Podman Desktop supplies the API. Bundle other runtime dependencies.
      external: ['@podman-desktop/api', ...builtinModules.flatMap((name) => [name, `node:${name}`])],
    },
  },
});
