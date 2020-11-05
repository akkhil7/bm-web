export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  server: {
    port: 6001, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  env: {
    BM_APP_URI: process.env.BM_APP_URI,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    CHROME_EXT_LINK: process.env.CHROME_EXT_LINK,
    MOZ_EXT_LINK: process.env.MOZ_EXT_LINK,
    EDGE_EXT_LINK: process.env.EDGE_EXT_LINK,
  },
  head: {
    title: 'Markie - Intelligent bookmarking solution for everyone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Markie takes care of bookmarking for you with automatic categorisation, automatic tagging, highlighting and much more. Sign up for free today.',
      },
      {
        name: 'keywords',
        content: 'bookmarking, tagging, bookmarks, categorize, highlight',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/global'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)

  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          { src: '~plugins/ga.js', mode: 'client' },
          { src: '~plugins/drift.js', mode: 'client' },
          { src: '~plugins/detectBrowser.client.js' },
          { src: '~plugins/vue-smoothscroll.client.js' },
        ]
      : [
          { src: '~plugins/detectBrowser.client.js' },
          { src: '~plugins/vue-smoothscroll.client.js' },
        ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'sm',
        breakpoints: {
          sm: 450,
          md: 768,
          lg: 1024,
          hd: Infinity,
        },
      },
    ],
    '@nuxtjs/apollo',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
        httpLinkOptions: {
          credentials: 'include',
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
