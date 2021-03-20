<template>
  <img :src="src" :alt="name + '-Icon'" @load="loaded = true" />
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    src: {
      type: String,
      required: true
    },
    name: {
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
