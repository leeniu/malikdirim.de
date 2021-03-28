require('dotenv').config()

const meta = {
  description: 'Web-Entwicklung, Tooling, DevOps, Security & Privacy',
  title: 'Malik Dirim - Web Developer & IT Enthusiast',
  site: 'Malik Dirim',
  locale: 'de_DE'
}

export default {
  target: 'static',
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
        content: 'Malik Dirim - Web Developer & IT Enthusiast'
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
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
      { rel: 'apple-touch-icon', href: '/apple-icon.png', sizes: '76x76' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['./assets/css/manrope.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/components/svg',
    '~/components/base',
    {
      src: '~/plugins/vue-particles',
      mode: 'client'
    }
  ],
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
    ],
    // https://github.com/robcresswell/nuxt-compress
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true
        },
        brotli: {
          mode: 1,
          quality: 10,
          threshold: 10240
        }
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
        exclude: ['/legal', '/privacy', '/404']
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
