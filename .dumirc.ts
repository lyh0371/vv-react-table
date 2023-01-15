import { defineConfig } from 'dumi';
import fs from 'fs';

const cssTxt = fs.readFileSync('./docs/index.css', 'utf-8');

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '首页',
    logo: '/logo.png',
    footer:
      '<a href="https://juejin.cn/user/3438928104003758/posts" target="_blank" rel="noreferrer">刘小灰出品</a>',
  },

  styles: [`/index.css`],
});
