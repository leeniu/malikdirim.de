/* eslint-disable sonarjs/no-duplicate-string */
const title = 'Malik Dirim - Web Developer & IT Enthusiast'
const description = 'Ich mag (Front-End) Web-Entwicklung, DevOps & Tooling, Privacy & Security und alles rund um Tech.'

export default {
  target: 'static',
  generate: {
    fallback: true
  },
  /**
   * Copy .env.example to .env and fill in the values there
   * https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env
   * https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/
   */
  publicRuntimeConfig: {
    appName: process.env.APP_NAME,
    address: {
      name: process.env.ADDRESS_NAME,
      street: process.env.ADDRESS_STREET,
      city: process.env.ADDRESS_CITY,
      country: process.env.ADDRESS_COUNTRY
    },
    emails: {
      imprint: process.env.EMAIL_IMPRINT,
      privacy: process.env.EMAIL_PRIVACY
    }
  },
  privateRuntimeConfig: {},
  head: {
    titleTemplate: titleChunk => {
      const title = 'Malik Dirim - Web Developer & IT Enthusiast'
      return titleChunk ? `${titleChunk} | ${title}` : title
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: title
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Malik Dirim'
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'de_DE'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://malikdirim.de/screenshot.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://malikdirim.de/screenshot.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: title
      },

      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: title
      }
    ],
    htmlAttrs: {
      lang: 'de'
    },
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
      { rel: 'apple-touch-icon', href: '/apple-icon.png', sizes: '76x76' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#0F766E' },
  css: ['./assets/css/manrope.css', './assets/css/inter.css'],
  /**
   * https://github.com/nuxt/components
   */
  components: ['~/components/'],
  plugins: [
    /**
     * https://github.com/creotip/vue-particles
     */
    {
      src: '~/plugins/vue-particles',
      mode: 'client'
    },
    /**
     * https://github.com/P3trur0/vue-country-flag/
     */
    { src: '@/plugins/vue-country-flags.js' }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@aceforth/nuxt-optimized-images',
    'nuxt-compress'
  ],
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-i18n'],
  /**
   * https://github.com/nuxt-community/eslint-module
   */
  eslint: {
    fix: true
  },
  /**
   * https://github.com/juliomrqz/nuxt-optimized-images
   */
  optimizedImages: {
    optimizeImages: true
  },
  /**
   * https://github.com/nuxt-community/nuxt-tailwindcss
   */
  tailwindcss: {
    jit: true,
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
  },
  /**
   * https://github.com/robcresswell/nuxt-compress
   */
  'nuxt-compress': {
    gzip: {
      cache: true,
      threshold: 8192
    },
    brotli: {
      threshold: 8192
    }
  },
  /**
   * https://github.com/nuxt-community/fontawesome-module#readme
   */
  fontawesome: {
    component: 'fa',
    addCss: false,
    icons: {
      solid: ['faTimes', 'faEnvelope', 'faPaperPlane', 'faHandSpock'],
      brands: ['faGithub', 'faGitlab', 'faCodepen', 'faDocker', 'faTwitter', 'faXing']
    }
  },
  /**
   * https://github.com/nuxt-community/robots-module
   */
  robots: {
    UserAgent: '*',
    Disallow: ['/impressum', '/datenschutz', '/404'],
    Sitemap: 'https://malikdirim.de/sitemap.xml'
  },
  /**
   * https://github.com/nuxt-community/sitemap-module
   */
  sitemap: {
    gzip: true,
    hostname: 'https://malikdirim.de',
    exclude: ['/impressum', '/datenschutz', '/404']
  },
  /**
   * https://i18n.nuxtjs.org/
   */
  i18n: {
    defaultLocale: 'de',
    locales: [
      {
        iso: 'de',
        code: 'de',
        flag: 'deu',
        name: 'Deutsch'
      },
      {
        iso: 'en',
        code: 'en',
        flag: 'gbr',
        name: 'English'
      }
    ]
  }
}
