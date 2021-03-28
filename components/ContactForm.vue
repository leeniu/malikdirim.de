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

    <div class="flex items-start">
      <input id="privacy" v-model="privacy" name="privacy" type="checkbox" required />
      <label for="privacy" class="ml-2 block text-sm text-gray-700 text-justify">
        Ja, ich habe die
        <nuxt-link to="privacy" class="text-primary-darker underline" target="_blank"
          >Datenschutzerkl&auml;rung</nuxt-link
        >
        zur Kenntnis genommen und bin damit einverstanden, dass die von mir angegebenen Daten elektronisch erhoben und
        gespeichert werden. Meine Daten werden dabei nur streng zweckgebunden zur Bearbeitung und Beantwortung meiner
        Anfrage genutzt. Mit dem Absenden des Kontaktformulars erkl&auml;re ich mich mit der Verarbeitung einverstanden.
        Nach Abschluss der Verarbeitung werden die erhobenen Daten gel&ouml;scht.<span class="text-gray-400"
          >&nbsp;(Sie k&ouml;nnen diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
          E-Mail an uns.)</span
        >
      </label>
    </div>

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

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      privacy: false
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault()
      this.$emit('submit', {
        name: this.name,
        email: this.email,
        message: this.message,
        privacy: this.privacy,
        'form-name': 'Contact'
      })
    },
    reset() {
      this.name = ''
      this.email = ''
      this.message = ''
      this.privacy = false
    }
  }
}
</script>
