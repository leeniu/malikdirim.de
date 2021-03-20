require('dotenv').config()

const meta = {
  description: 'Web-Entwicklung, Tooling, DevOps, Security & Privacy',
  title: 'Malik Dirim - Web Developer & IT Enthusiast',
  site: 'Malik Dirim',
  locale: 'de_DE'
}

export default {
  /*
   ** Headers of the page
   */
  generate: {
    fallback: true
  },
  head: {
    title: 'Home',
    titleTemplate: '%s | Malik Dirim - Web Developer & IT Enthusiast',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: meta.description
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: meta.title
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: meta.site
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: meta.locale
      },
      {
        hid: 'description',
        name: 'description',
        content: meta.description
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: meta.title
      }
    ],
    htmlAttrs: {
      lang: 'de_DE'
    },

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['./assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/components/svg'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Docs: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Docs: https://github.com/nuxt-community/nuxt-tailwindcss
    [
      '@nuxtjs/tailwindcss',
      {
        configPath: '~/tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Docs: https://github.com/nuxt-community/pwa-module
    '@nuxtjs/pwa',
    // Docs: https://github.com/nuxt-community/robots-module
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: ['/legal', '/privacy'],
        Sitemap: 'https://malikdirim.de/sitemap.xml'
      }
    ],
    // Docs: https://github.com/nuxt-community/sitemap-module
    [
      '@nuxtjs/sitemap',
      {
        hostname: 'https://malikdirim.de',
        gzip: true,
        exclude: ['/legal', '/privacy']
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
