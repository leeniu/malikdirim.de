<template>
  <main class="flex flex-1 flex-col md:flex-row md:justify-center md:items-center pt-10 md:pt-0">
    <section class="w-full md:w-5/8 mb-16 md:mb-0">
      <h2
        class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-12 sm:tracking-wider font-light sm:font-extralight transition duration-500"
      >
        Web-Developer
      </h2>

      <ul class="w-full sm:w-1/2 grid grid-cols-4 gap-2">
        <li v-for="link in links" :key="link.alt">
          <a target="_blank" :href="link.href" rel="noopener noreferrer">
            <component
              :is="link.svg"
              :class="[link.classes]"
              class="p-2 w-auto h-10 sm:h-10 lg:h-12 xl:h-16 transition duration-200 fill-current"
            ></component>
          </a>
        </li>
        <li key="contact">
          <a href="#" @click.prevent="onShowModal">
            <SVGEmail class="p-2 w-auto h-10 sm:h-10 lg:h-12 xl:h-16 fill-current hover:text-email" />
          </a>
          <ContactModal ref="contactModal" />
        </li>
      </ul>
    </section>
    <section class="w-full md:w-3/8 p-12 md:p-0 md:-mt-12">
      <Cat class="hidden xl:block" />
      <img src="/img/cat.png" alt="Cute cat" class="block xl:hidden" />
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
      links: [
        {
          href: 'https://gitlab.com/m.dirim',
          classes: 'hover:text-gitlab',
          svg: 'SVGGitlab'
        },
        {
          href: 'https://github.com/leeniu',
          classes: 'hover:text-github',
          svg: 'SVGGithub'
        },
        {
          href: 'https://codepen.io/leeniu',
          classes: 'hover:text-codepen',
          svg: 'SVGCodepen'
        },
        {
          href: 'https://hub.docker.com/u/malikdirim',
          classes: 'hover:text-docker',
          svg: 'SVGDocker'
        },
        {
          href: 'https://www.flybytes.de/team/malik-dirim',
          classes: 'hover:text-flybytes',
          svg: 'SVGFlybytes'
        },
        {
          href: 'https://twitter.com/malikdirim',
          classes: 'hover:text-twitter',
          svg: 'SVGTwitter'
        },
        {
          href: 'https://www.xing.com/profile/Malik_Dirim/',
          classes: 'hover:text-xing',
          svg: 'SVGXing'
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
  methods: {
    onShowModal() {
      this.$refs.contactModal.show()
    }
  }
}
</script>
