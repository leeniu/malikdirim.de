<script>
import BaseModal from '~/components/base/BaseModal'
import ContactForm from '~/components/ContactForm'

export default {
  components: {
    BaseModal,
    ContactForm
  },
  data() {
    return {
      showing: false,
      loading: false
    }
  },
  methods: {
    show() {
      this.showing = true
    },
    hide() {
      this.showing = false
    },
    onSubmit(form) {
      this.loading = true
      fetch('/', {
        method: 'POST',
        body: Object.keys(form)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(form[key]))
          .join('&'),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
        .then(response => {
          if (response.status === 200) {
            this.$refs.form.reset()
            alert('Vielen Dank! Das Formular wurde übermittelt.')
            this.hide()
          } else {
            throw new Error('Das Formular konnte leider nicht übermittelt werden.')
          }
        })
        .catch(error => {
          alert(error)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<template>
  <BaseModal v-if="showing" @close="hide">
    <template #header>
      <h3 class="mb-3">Kontakt</h3>
    </template>
    <template #body>
      <ContactForm ref="form" @submit="onSubmit" />
    </template>
  </BaseModal>
</template>
