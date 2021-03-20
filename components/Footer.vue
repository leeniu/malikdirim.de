<template>
  <footer class="py-4">
    <nav>
      <ul class="flex flex-col sm:flex-row align-center">
        <li v-for="(link, index) in links" :key="index">
          <nuxt-link :to="{ name: link.name }" class="sm:mr-4">{{ link.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
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
