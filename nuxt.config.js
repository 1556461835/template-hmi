/*
 * @Author: your name
 * @Date: 2021-04-07 13:58:25
 * @LastEditTime: 2021-06-21 22:55:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\nuxt.config.js
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hmi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: false,

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/elementChange.sass',
    '@/assets/css/BascStyle.sass',
    '@/assets/css/main.scss',
    '@/assets/icon/iconfont.css'
  ],

  plugins: [
    '@/plugins/element-ui',
    '@/plugins/directive',
    '@/plugins/api',
    '@/plugins/globalComponents.js',
    '@/plugins/i18n.js',
    { src: '~/plugins/persistedstate.js', ssr: false }
  ],

  components: true,

  buildModules: [],

  modules: ['@nuxtjs/axios'],

  server: {
    port: 8084, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },

  env: {
    device: 'web'
  },
  axios: {
    // baseURL: 'http://localhost:8091/',
    baseURL: 'http://10.10.1.200:8091/',
    // baseURL: 'http://199.25.25.1:8091/',
    timeout: 60000,
    retry: { retries: 3 },
    proxy: true
  },
  proxy: {
    '/api': {
      // target: 'http://localhost:8091/',
      target: 'http://10.10.1.200:8091/',
      // target: 'http://199.25.25.1:8091/',
      pathRewrite: { '^/api/': '' }
    }
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
