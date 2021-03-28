<template>
  <main class="flex flex-1 flex-col md:flex-row md:justify-center md:items-center pt-10 md:pt-0">
    <section class="w-full md:w-5/8 mb-16 md:mb-0">
      <h2
        :class="[showSlogan ? 'opacity-100' : 'opacity-0']"
        class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-12 sm:tracking-wider font-light sm:font-extralight transition duration-500"
      >
        Web-Developer
      </h2>

      <ul class="w-full sm:w-1/2 grid grid-cols-4 gap-2">
        <li v-for="link in creations" :key="link.alt">
          <a target="_blank" :href="link.href" rel="noopener noreferrer">
            <component
              :is="link.comp"
              :class="[{ 'opacity-0': !link.show }, link.classes]"
              class="p-2 w-auto h-10 sm:h-10 lg:h-12 xl:h-16 transition duration-200 fill-current"
            ></component>
          </a>
        </li>

        <li v-for="link in profiles" :key="link.alt">
          <a target="_blank" :href="link.href" rel="noopener noreferrer">
            <component
              :is="link.comp"
              :class="[{ 'opacity-0': !link.show }, link.classes]"
              class="p-2 w-auto h-10 sm:h-10 lg:h-12 xl:h-16 transition duration-200 fill-current"
            />
          </a>
        </li>
        <li key="contact">
          <a href="#" @click.prevent="onShowModal">
            <SVGEmail
              :class="[{ 'opacity-0': !showContactLink }]"
              class="p-2 w-auto h-10 sm:h-10 lg:h-12 xl:h-16 transition duration-200 fill-current hover:text-email"
            />
          </a>
          <ContactModal ref="contactModal" />
        </li>
      </ul>
    </section>
    <section class="w-full md:w-3/8 p-12 md:p-0 md:-mt-12">
      <Cat :class="[showImage ? 'opacity-100' : 'opacity-0']" class="hidden xl:block transition duration-500" />
      <img
        src="/img/cat.png"
        alt="Cute cat"
        :class="[showImage ? 'opacity-100' : 'opacity-0']"
        class="block xl:hidden transition duration-500"
      />
    </section>
  </main>
</template>

<script>
import ContactModal from '@/components/ContactModal'
import Cat from '@/components/Cat'

export default {
  components: {
    Cat,
    ContactModal
  },
  layout: 'home',
  data() {
    return {
      showImage: false,
      showSlogan: false,
      showContactLink: false,
      creations: [
        {
          href: 'https://gitlab.com/m.dirim',
          classes: 'hover:text-gitlab',
          comp: 'SVGGitlab',
          show: false
        },
        {
          href: 'https://github.com/leeniu',
          classes: 'hover:text-github',
          comp: 'SVGGithub',
          show: false
        },
        {
          href: 'https://codepen.io/leeniu',
          classes: 'hover:text-codepen',
          comp: 'SVGCodepen',
          show: false
        },
        {
          href: 'https://hub.docker.com/u/malikdirim',
          classes: 'hover:text-docker',
          comp: 'SVGDocker',
          show: false
        }
      ],
      profiles: [
        {
          href: 'https://www.flybytes.de/team/malik-dirim',
          classes: 'hover:text-flybytes',
          comp: 'SVGFlybytes',
          show: false
        },
        {
          href: 'https://twitter.com/malikdirim',
          classes: 'hover:text-twitter',
          comp: 'SVGTwitter',
          show: false
        },
        {
          href: 'https://www.xing.com/profile/Malik_Dirim/',
          classes: 'hover:text-xing',
          comp: 'SVGXing',
          show: false
        }
      ]
    }
  },
  /* istanbul ignore next */
  head() {
    return {
      title: 'Home'
    }
  },
  async mounted() {
    await this.timer(500)
    this.showSlogan = true
    await this.timer(500)
    await this.addCreationsIcons()
    await this.addProfilesIcons()
    await this.timer(500)
    this.showContactLink = true
    await this.timer(500)
    this.showImage = true
  },
  methods: {
    onShowModal() {
      this.$refs.contactModal.show()
    },
    /**
     * Abstracts the native javascript timeout
     * function into a awaitable promise.
     *
     * @param   {Number}  ms  Millisekonds
     * @returns {Promise}
     */
    timer(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async addCreationsIcons() {
      for (let i = 0; i < this.creations.length; i++) {
        await this.timer(500)
        this.creations[i].show = true
      }
    },
    async addProfilesIcons() {
      for (let i = 0; i < this.profiles.length; i++) {
        await this.timer(500)
        this.profiles[i].show = true
      }
    }
  }
}
</script>
