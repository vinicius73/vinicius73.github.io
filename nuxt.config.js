export default {
  target: 'static',
  head: {
    title: 'Vinicius Reis',
    titleTemplate: '%s - Vinicius Reis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Severino Full-Stack Developer 🤓' },
      { hid: 'og:description', name: 'og:description', content: 'Severino Full-Stack Developer 🤓' },
      { hid: 'og:title', name: 'og:title', content: 'Vinicius Reis' },
      { hid: 'og:image', name: 'og:image', content: 'https://gravatar.com/avatar/f803c45d62a468e0cb990398c004bd3e?s=400&d=robohash&r=x' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.0/css/brands.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.0/css/all.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    linkActiveClass: 'is-active'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/css/main.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
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
