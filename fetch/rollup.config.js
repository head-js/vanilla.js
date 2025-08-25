import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';


const external = [
];


export default [
  {
    input: 'src/get.js',

    external,

    plugins: [
      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'get.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/post.js',

    external,

    plugins: [
      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'post.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/put.js',

    external,

    plugins: [
      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'put.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/del.js',

    external,

    plugins: [
      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'del.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/text.js',

    external,

    plugins: [
      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'text.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/index.js',

    external,

    plugins: [
      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'index.js', format: 'cjs', exports: 'default' },
  },
];
