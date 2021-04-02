<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'home',
          name: 'index'
        },
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
  i18n: {
    messages: {
      de: {
        home: 'Home',
        imprint: 'Impressum',
        privacy: 'Datenschutz'
      }
    }
  }
}
</script>

<template>
  <footer class="py-4">
    <nav>
      <ul class="flex flex-col sm:flex-row items-end justify-end">
        <li v-for="(link, index) in links" :key="index" class="mb-3 mr-6">
          <nuxt-link :to="localePath({ name: link.name })">{{ $t(link.title) }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>
