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
          <a target="_blank" :href="link.href" :title="link.title" rel="noopener noreferrer">
            <component
              :is="link.svg"
              :class="[link.classes]"
              class="p-2 w-auto h-10 sm:h-10 lg:h-12 xl:h-16 transition duration-200 fill-current"
            ></component>
          </a>
        </li>
        <li key="contact">
          <a href="#" title="Kontaktformular" @click.prevent="onShowModal">
            <SVGEmail class="p-2 w-auto h-10 sm:h-10 lg:h-12 xl:h-16 fill-current hover:text-email" />
          </a>
          <ContactModal ref="contactModal" />
        </li>
      </ul>
    </section>
    <section class="w-full md:w-3/8 p-8 md:p-0 md:-mt-12">
      <Cat class="hidden xl:block" />
      <img
        src="/img/cat.png"
        alt="Image of a cute sleeping cat"
        class="block xl:hidden w-full h-auto max-w-sm mx-auto"
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
      links: [
        {
          title: 'GitLab',
          svg: 'SVGGitlab',
          classes: 'hover:text-gitlab',
          href: 'https://gitlab.com/m.dirim'
        },
        {
          title: 'Github',
          svg: 'SVGGithub',
          classes: 'hover:text-github',
          href: 'https://github.com/leeniu'
        },
        {
          title: 'CodePen',
          svg: 'SVGCodepen',
          classes: 'hover:text-codepen',
          href: 'https://codepen.io/leeniu'
        },
        {
          title: 'Docker',
          svg: 'SVGDocker',
          classes: 'hover:text-docker',
          href: 'https://hub.docker.com/u/malikdirim'
        },
        {
          title: 'Flybytes',
          svg: 'SVGFlybytes',
          classes: 'hover:text-flybytes',
          href: 'https://www.flybytes.de/team/malik-dirim'
        },
        {
          title: 'Twitter',
          svg: 'SVGTwitter',
          classes: 'hover:text-twitter',
          href: 'https://twitter.com/malikdirim'
        },
        {
          title: 'XING',
          svg: 'SVGXing',
          classes: 'hover:text-xing',
          href: 'https://www.xing.com/profile/Malik_Dirim/'
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
