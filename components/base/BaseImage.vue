<template>
  <img :src="src" :alt="alt" @load="loaded = true" />
</template>

<script>
export default {
  name: 'BaseImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loaded: false
    }
  }
}
</script>
