/* eslint-disable sonarjs/no-duplicate-string */
const title = 'Malik Dirim - Web Developer & IT Enthusiast'
const description = 'Ich mag (Front-End) Web-Entwicklung, DevOps & Tooling, Privacy & Security und alles rund um Tech.'

export default {
  target: 'static',
  generate: {
    fallback: true
  },
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
  css: ['./assets/css/manrope.css'],
  /**
   * https://github.com/nuxt/components
   */
  components: ['~/components/'],
  plugins: [
    {
      src: '~/plugins/vue-particles',
      mode: 'client'
    }
  ],
  buildModules: [
    /**
     * https://github.com/nuxt-community/eslint-module
     */
    '@nuxtjs/eslint-module',
    /**
     * https://github.com/juliomrqz/nuxt-optimized-images
     */
    '@aceforth/nuxt-optimized-images',
    /**
     * https://github.com/nuxt-community/nuxt-tailwindcss
     */
    [
      '@nuxtjs/tailwindcss',
      {
        configPath: '~/tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css'
      }
    ],
    /**
     * https://github.com/robcresswell/nuxt-compress
     */
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
    ],
    // https://github.com/nuxt-community/fontawesome-module#readme
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        addCss: false,
        icons: {
          solid: ['faTimes', 'faEnvelope', 'faPaperPlane', 'faHandSpock'],
          brands: ['faGithub', 'faGitlab', 'faCodepen', 'faDocker', 'faTwitter', 'faXing']
        }
      }
    ]
  ],
  modules: [
    /**
     * https://github.com/nuxt-community/robots-module
     */
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: ['/impressum', '/datenschutz', '/404'],
        Sitemap: 'https://malikdirim.de/sitemap.xml'
      }
    ],
    /**
     * https://github.com/nuxt-community/sitemap-module
     */
    [
      '@nuxtjs/sitemap',
      {
        gzip: true,
        hostname: 'https://malikdirim.de',
        exclude: ['/impressum', '/datenschutz', '/404']
      }
    ],
    /**
     * https://i18n.nuxtjs.org/
     */
    [
      'nuxt-i18n',
      {
        lazy: true, // Required to work with separate files like this
        langDir: '~/lang/',
        defaultLocale: 'de',
        locales: [
          {
            code: 'de',
            iso: 'de-DE',
            name: 'Deutsch',
            file: 'de-DE.json'
          }
        ],
        parsePages: false,
        pages: {
          imprint: {
            de: '/impressum'
          },
          privacy: {
            de: '/datenschutz'
          }
        }
      }
    ]
  ]
}
