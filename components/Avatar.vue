<template>
  <BaseImage src="/img/avatar.jpg" :alt="alt" />
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
