<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault()
      this.$emit('submit', {
        name: this.name,
        email: this.email,
        message: this.message,
        'form-name': 'Contact'
      })
    },
    reset() {
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<template>
  <form
    name="Contact"
    class="mb-0 space-y-6"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="submitForm"
  >
    <label for="name" class="block text-sm font-medium text-gray-700"
      >Name
      <input id="name" v-model="name" name="name" type="text" required />
    </label>
    <label for="email" class="block text-sm font-medium text-gray-700"
      >E-Mail-Adresse
      <input id="email" v-model="email" name="email" type="email" autocomplete="email" required />
    </label>
    <label for="message" class="block text-sm font-medium text-gray-700"
      >Nachricht
      <textarea id="message" v-model="message" name="message" rows="4" required></textarea>
    </label>
    <div class="text-right">
      <button
        type="submit"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-lighter"
      >
        Senden
      </button>
    </div>
  </form>
</template>
