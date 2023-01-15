import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import sass from 'node-sass';
const external = ['lodash', 'rsuite-table', 'react', 'react-dom'];
const babelOptions = {
  presets: ['@babel/preset-env'],
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  exclude: '**/node_modules/**',
};

const processScss = function (context) {
  return new Promise((resolve, reject) => {
    sass.compile(
      {
        file: context,
      },
      function (err, result) {
        if (!err) {
          resolve(result);
        } else {
          reject(result);
        }
      }
    );
    sass.compile(context, {}).then(
      function (output) {
        if (output && output.css) {
          resolve(output.css);
        } else {
          reject({});
        }
      },
      function (err) {
        reject(err);
      }
    );
  });
};
const config = (arg) => ({
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    commonjs(),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.node'],
    }),
    postcss({
      extract: true,
      process: processScss,
    }),
    json(),
    babel(babelOptions),
  ],
  external,
  treeshake: {
    moduleSideEffects: false,
  },

  ...arg,
});

const input = 'src/ReactTable/index.tsx';

export default [
  config({
    input: input,
    output: {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].esm.js',
      chunkFileNames: 'chunks/ali-react-table-[name]-[hash].esm.js',
    },
  }),
  config({
    input: input,
    output: {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].js',
      chunkFileNames: 'chunks/ali-react-table-[name]-[hash].js',
    },
  }),
  {
    input: input,
    output: [{ filename: 'index.d.ts', dir: 'dist/es/type', format: 'esm' }],
    plugins: [
      postcss({
        extract: true,
        process: processScss,
      }),
      dts({
        exclude: ['*.scss', '*.css'],
      }),
    ],
  },
];
