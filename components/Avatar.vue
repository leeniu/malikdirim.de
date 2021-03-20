<template>
  <BaseImage src="/img/avatar.jpg" :alt="alt" />
</template>

<script>
import { BaseImage } from '@/components'
import { contactData } from '@/mixins'

export default {
  name: 'Avatar',
  components: {
    BaseImage
  },
  mixins: [contactData],
  computed: {
    alt() {
      return 'Avatar of ' + this.contact.name
    }
  }
}
</script>
<style lang="scss" scoped></style>
