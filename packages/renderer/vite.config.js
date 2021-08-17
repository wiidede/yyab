/* eslint-env node */

import {chrome} from '../../electron-vendors.config.json';
import {join} from 'path';
import {builtinModules} from 'module';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

const PACKAGE_ROOT = __dirname;

export default defineConfig({
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, 'src') + '/',
      '/@assets/': join(PACKAGE_ROOT, 'assets') + '/',
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3);
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }],
    }),
  ],
  base: '',
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: 'dist',
    assetsDir: '.',
    terserOptions: {
      ecma: 2020,
      compress: {
        passes: 2,
      },
      safari10: false,
    },
    rollupOptions: {
      external: [
        ...builtinModules,
      ],
    },
    emptyOutDir: true,
    brotliSize: false,
  },
});
