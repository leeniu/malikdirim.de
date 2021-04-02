<script>
import contactData from '@/mixins/contactData'

export default {
  mixins: [contactData]
}
</script>

<template>
  <h1>{{ contact.name }}</h1>
</template>
