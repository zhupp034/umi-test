import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // mfsu: {},
  webpack5: {},

  fastRefresh: {},
  // scripts: [{ src: './neplayer_v2.6.0.js' }],
  // styles: [{ src: './neplayer_v2.6.0.css' }],
});
