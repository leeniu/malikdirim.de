export default {
  target: 'static',
  generate: {
    fallback: true
  },
  head: {
    title: 'Home',
    titleTemplate: '%s | Malik Dirim - Web Developer & IT Enthusiast',
    htmlAttrs: {
      lang: 'de_DE'
    }
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
    /**
     * https://github.com/juliomrqz/nuxt-optimized-images
     */
    [
      '@aceforth/nuxt-optimized-images',
      {
        optimizeImagesInDev: true
      }
    ]
  ],
  modules: [
    /**
     * https://github.com/nuxt-community/pwa-module
     */
    [
      '@nuxtjs/pwa',
      {
        icon: {
          source: '~/assets/img/avatar.jpg'
        },
        meta: {
          theme_color: '#0F766E',
          lang: 'de'
        },
        manifest: {
          lang: 'de'
        }
      }
    ],
    /**
     * https://github.com/nuxt-community/robots-module
     */
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: ['/legal', '/privacy'],
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
        exclude: ['/legal', '/privacy', '/404']
      }
    ]
  ]
}
