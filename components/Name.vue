<template>
  <h1>{{ contact.name }}</h1>
</template>

<script>
import { contactData } from '@/mixins'

export default {
  name: 'Name',
  mixins: [contactData]
}
</script>
<style lang="scss" scoped></style>
