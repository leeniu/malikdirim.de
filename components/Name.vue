<template>
  <h1>{{ contact.name }}</h1>
</template>

<script>
import contactData from '@/mixins/contactData'

export default {
  mixins: [contactData]
}
</script>
