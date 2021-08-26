export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    host: "0.0.0.0"
  },
  // serverMiddleware: [
  //   { path: "/server-middleware", handler: "~/server-middleware/rest.js" },
  // ],
  head: {
    title: "PAPblank",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', property:"og:title", content: 'ATTENTION DEFECIT TRANSFER PROTOCOL' },
      { name: 'image', property:"og:image", content: '/why.gif' },
      { name: 'url', property:"og:url", content: 'https://adhdhttp.net/' },
      { name: 'description', property:"og:description", content: 'Tyler Hill is a freelance web developer in Oakland, CA' },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.typekit.net/izu0ugl.css"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style.min.css", "@/static/slick.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/slider.js",
      mode: "client"
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/google-fonts",
    "~/modules/class-purge.js",
    "@nuxtjs/tailwindcss",
  ],
  googleFonts: {
    families: {
      Merriweather: true,
      "Open+Sans": true
    }
  },

  // modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxt/content"
  ],
  proxy: {
    "/api": {
      target: "http://localhost:9009/wp-json/wp/v2",
      changeOrigin: true,
      pathRewrite: {
        "^/api/":"/"
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
