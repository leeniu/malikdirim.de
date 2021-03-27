<template>
  <footer class="py-4">
    <nav>
      <ul class="flex flex-col sm:flex-row items-end justify-end">
        <li v-for="(link, index) in links" :key="index" class="mb-3 mr-6">
          <nuxt-link :to="{ name: link.name }">{{ link.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Home',
          name: 'index'
        },
        {
          title: 'Impressum',
          name: 'legal'
        },
        {
          title: 'Datenschutzerklärung',
          name: 'privacy'
        }
      ]
    }
  }
}
</script>
