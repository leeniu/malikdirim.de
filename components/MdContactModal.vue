<script>
export default {
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
  },
  i18n: {
    messages: {
      de: {
        heading: 'Kontakt'
      }
    }
  }
}
</script>

<template>
  <md-modal v-if="showing" @close="hide">
    <template #header>
      <h3 class="mb-3">{{ $t('heading') }}</h3>
    </template>
    <template #body>
      <md-contact-form ref="form" @submit="onSubmit" />
    </template>
  </md-modal>
</template>
