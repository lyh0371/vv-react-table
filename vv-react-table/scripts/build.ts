// 对table进行打包
import { rollup, RollupOptions } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
const inputConfig: RollupOptions = {
  input: 'src/ReactTable/index.tsx',
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.node'],
    }),
  ],
  treeshake: {
    moduleSideEffects: false,
  },
};

const builg = async () => {
  const build = await rollup(inputConfig);
};

builg();
