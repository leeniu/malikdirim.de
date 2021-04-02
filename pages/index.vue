<script>
export default {
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
  methods: {
    onShowModal() {
      this.$refs.contactModal.show()
    }
  },
  i18n: {
    messages: {
      de: {
        title: 'Datenschutz'
      }
    }
  }
}
</script>

<template>
  <main class="flex flex-1 flex-col md:flex-row md:justify-center md:items-center pt-10 md:pt-0">
    <section class="w-full md:w-5/8 mb-8 md:mb-0">
      <h2
        class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-12 sm:tracking-wider font-light sm:font-extralight transition duration-500"
      >
        Web-Developer
      </h2>

      <ul class="w-full md:w-1/2 grid grid-cols-4 sm:grid-cols-8 md:grid-cols-4 gap-2 md:gap-4">
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
    <section class="w-full md:w-3/8 mb-8 md:mb-0 px-8 sm:px-12 md:px-16 lg:px-0 md:-mt-12">
      <Cat class="hidden xl:block" />
      <picture class="hidden lg:block xl:hidden">
        <source :srcSet="require('~/assets/img/cat.png?format=avif')" type="image/avif" />
        <source :srcSet="require('~/assets/img/cat.png?format=webp')" type="image/webp" />
        <img
          width="528"
          height="512"
          class="mx-auto"
          alt="Image of a cute sleeping cat"
          :src="require('~/assets/img/cat.png')"
        />
      </picture>
      <picture class="block lg:hidden">
        <source type="image/avif" :srcSet="require('~/assets/img/cat.png?format=avif&resize&size=528')" />
        <source type="image/webp" :srcSet="require('~/assets/img/cat.png?format=webp&resize&size=528')" />
        <img
          width="528"
          height="512"
          class="mx-auto"
          alt="Image of a cute sleeping cat"
          :src="require('~/assets/img/cat.png?resize&size=528')"
        />
      </picture>
    </section>
  </main>
</template>
