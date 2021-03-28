<template>
  <nuxt-img format="jpg" quality="80" fit="contain" :alt="alt" src="/img/avatar.jpg" />
</template>

<script>
import contactData from '@/mixins/contactData'

export default {
  mixins: [contactData],
  computed: {
    alt() {
      return 'Avatar of ' + this.contact.name
    }
  }
}
</script>
