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
  },
  i18n: {
    messages: {
      de: {
        name: 'Name',
        email: 'E-Mail-Adresse',
        message: 'Nachricht',
        privacyCheckbox:
          'Ja, ich habe die {privacy-link} zur Kenntnis genommen und bin damit einverstanden, dass die von mir angegebenen Daten elektronisch erhoben und gespeichert werden. Meine Daten werden dabei nur streng zweckgebunden zur Bearbeitung und Beantwortung meiner Anfrage genutzt. Mit dem Absenden des Kontaktformulars erkläre ich mich mit der Verarbeitung einverstanden. Nach Abschluss der Verarbeitung werden die erhobenen Daten gelöscht. {side-note}',
        privacyPolicy: 'Datenschutzerklärung',
        privacySideNote:
          'Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.',
        send: 'Absenden'
      }
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
      >{{ $t('name') }}
      <input id="name" v-model="name" name="name" type="text" required />
    </label>
    <label for="email" class="block text-sm font-medium text-gray-700"
      >{{ $t('email') }}
      <input id="email" v-model="email" name="email" type="email" autocomplete="email" required />
    </label>
    <label for="message" class="block text-sm font-medium text-gray-700"
      >{{ $t('message') }}
      <textarea id="message" v-model="message" name="message" rows="4" required></textarea>
    </label>

    <div class="flex items-start">
      <input id="privacy" v-model="privacy" name="privacy" type="checkbox" required />
      <i18n tag="label" for="privacy" path="privacyCheckbox" class="ml-2 block text-sm text-gray-700 text-justify">
        <template #privacy-link>
          <nuxt-link :to="localePath('privacy')" class="text-primary-darker underline" target="_blank">{{
            $t('privacyPolicy')
          }}</nuxt-link>
        </template>
        <template #side-note>
          <span class="text-gray-400">({{ $t('privacySideNote') }})</span>
        </template>
      </i18n>
    </div>

    <div class="text-right">
      <button
        type="submit"
        class="inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-lighter"
      >
        <span class="mr-2">{{ $t('send') }}</span
        ><fa class="h-4" :icon="['fas', 'paper-plane']" />
      </button>
    </div>
  </form>
</template>
