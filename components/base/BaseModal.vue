<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<template>
  <transition name="modal-fade fixed top-0 right-0 bottom-0 left-0 bg-blacke flex justify-center items-center">
    <div class="modal-backdrop" @click.self="close">
      <div role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header>
          <slot name="header"> Title </slot>
          <button type="button" aria-label="Close modal" @click="close">x</button>
        </header>

        <section>
          <slot name="body">Body</slot>
        </section>

        <footer>
          <slot name="footer">Footer</slot>
          <button type="button" aria-label="Close modal" @click="close">Close me!</button>
        </footer>
      </div>
    </div>
  </transition>
</template>
