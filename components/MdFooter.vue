<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'imprint',
          name: 'imprint'
        },
        {
          title: 'privacy',
          name: 'privacy'
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
        home: 'Home',
        contact: 'Kontakt',
        imprint: 'Impressum',
        privacy: 'Datenschutz'
      },
      en: {
        home: 'Home',
        contact: 'Contact',
        imprint: 'Imprint',
        privacy: 'Privacy'
      }
    }
  }
}
</script>

<template>
  <footer class="py-4">
    <nav>
      <ul class="flex flex-col sm:flex-row items-end justify-end">
        <li class="mb-4 mr-8">
          <a href="#" title="Kontaktformular" @click.prevent="onShowModal">
            {{ $t('contact') }}
          </a>
          <md-contact-modal ref="contactModal" />
        </li>
        <li v-for="(link, index) in links" :key="index" class="mb-4 mr-8">
          <nuxt-link :to="localePath({ name: link.name })">{{ $t(link.title) }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>
