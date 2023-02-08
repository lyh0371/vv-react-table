import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/',
  themeConfig: {
    name: '首页',
    logo: '/logo.png',
    prefersColor: {
      default: 'light',
      switch: false,
    },
    footer:
      '<a href="https://juejin.cn/user/3438928104003758/posts" target="_blank" rel="noreferrer">刘小灰出品</a>',
  },

  styles: [`/index.css`],
});
