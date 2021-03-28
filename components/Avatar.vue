<template>
  <BaseImage :src="`/img/avatar--${size}.jpg`" :alt="alt" />
</template>

<script>
import contactData from '@/mixins/contactData'

export default {
  mixins: [contactData],
  props: {
    size: {
      type: String,
      default: 'small',
      validator: value => ['small', 'base'].includes(value)
    }
  },
  computed: {
    alt() {
      return 'Avatar of ' + this.contact.name
    }
  }
}
</script>
