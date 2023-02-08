/**
 * @name 使用 rollup 对 vv-react-table 打包
 */
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import fs from 'fs';
import { OutputOptions, rollup, RollupOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
const external = ['lodash', 'rsuite-table', 'react', 'react-dom'];
const inputConfig: RollupOptions = {
  input: 'src/ReactTable/index.tsx',
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    commonjs(),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.node'],
    }),

    json(),
    babel({
      presets: ['@babel/preset-env'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: '**/node_modules/**',
      babelHelpers: 'bundled',
    }),
    postcss({
      extract: true,
    }),
  ],
  external,
  treeshake: {
    moduleSideEffects: false,
  },
};

// 打包组件
const buildCore = async () => {
  const build = await rollup(inputConfig);
  return build.write({
    dir: 'dist',
    format: 'esm',
    entryFileNames: '[name].esm.js',
  } as OutputOptions);
};

// 生成.d.ts文件
const dtsCore = async () => {
  const build = await rollup({
    input: 'src/ReactTable/index.tsx',
    plugins: [
      postcss({
        extract: true,
      }),
      dts({
        compilerOptions: {
          allowJs: true,
        },
      }),
    ],
  });
  return build.write({
    filename: 'index.d.ts',
    dir: 'dist/type',
  } as OutputOptions);
};

// 处理package.json

const pkgCore = async () => {
  let pkg = fs.readFileSync('package.pro.json', 'utf-8');
  fs.writeFileSync('dist/package.json', pkg);
};

// 复制 README

const copyReadme = () => {
  fs.copyFile('../README.md', 'dist/README.md', () => {});
};

// 打包所有
const buildAll = async () => {
  await buildCore();
  await dtsCore();
  await pkgCore();
  copyReadme();
};
buildAll();
