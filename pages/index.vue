<template>
  <main class="flex flex-1 flex-col md:flex-row md:justify-center md:items-center pt-10 md:pt-0">
    <section class="w-full md:w-5/8 mb-16 md:mb-0">
      <h2
        :class="[showSlogan ? 'opacity-100' : 'opacity-0']"
        class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 md:mb-12 font-thin transition duration-500"
      >
        Full-Stack Web-Developer
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
            ></component>
          </a>
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
import { BaseImage, Cat } from '@/components'

export default {
  name: 'Home',
  components: {
    Cat,
    BaseImage
  },
  data() {
    return {
      showSlogan: false,
      showImage: false,
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
        },
        {
          href: 'mailto:contact@malikdirim.de',
          classes: 'hover:text-email',
          comp: 'SVGEmail',
          show: false
        }
      ]
    }
  },
  async mounted() {
    await this.timer(500)
    this.showSlogan = true
    await this.timer(500)
    await this.addCreationsIcons()
    await this.addProfilesIcons()
    await this.timer(500)
    this.showImage = true
  },
  methods: {
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
  },
  /* istanbul ignore next */
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>
