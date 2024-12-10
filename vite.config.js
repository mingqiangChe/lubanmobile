import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pxtorem from 'postcss-pxtorem';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue(res) {
            // 针对 vant 和自定义样式分别设置 rootValue
            return res.file.includes('vant') ? 37.5 : 75;
          },
          propList: ['*'], // 转换所有 CSS 属性
          selectorBlackList: ['ignore'], // 忽略类名为 ignore 的样式
          exclude: /node_modules/i, // 忽略 node_modules 文件夹
          replace: true, // 是否替换已转换的值
          mediaQuery: false, // 不允许媒体查询中转换 px
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    https: false,
    port: 3000,
    host: '0.0.0.0',
    open: true,
    cors: true,
    proxy: {
      '/dev-api': {
        target: 'http://192.168.124.30:8080',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/dev-api/, ''),
      },
    },
  },
});
