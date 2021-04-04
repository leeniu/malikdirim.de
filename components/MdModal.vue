<script>
export default {
  mounted() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        this.close()
      }
    })
  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
  i18n: {
    messages: {
      de: {
        titel: 'Titel',
        body: 'Inhalt',
        close: 'Modal schließen'
      },
      en: {
        titel: 'Title',
        body: 'Body',
        close: 'Close modal'
      }
    }
  }
}
</script>

<template>
  <div class="fixed z-20 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        style="backdrop-filter: blur(8px)"
        aria-hidden="true"
        @click.self="close"
      ></div>
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div
        class="relativ inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
      >
        <button
          type="button"
          class="absolute top-0 right-0 m-3 p-3 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-red-700 focus:bg-gray-100 focus:text-red-700"
          :aria-label="$t('close')"
          @click="close"
        >
          <fa class="h-4" :icon="['fas', 'times']" />
        </button>
        <slot>
          <div class="px-6 py-8 sm:px-8 sm:py-10">
            <header id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
              <slot name="header">{{ $t('titel') }}</slot>
            </header>
            <section id="modal-description">
              <slot name="body">{{ $t('body') }}</slot>
            </section>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
