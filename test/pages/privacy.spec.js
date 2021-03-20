import { shallowMount } from '@vue/test-utils'
import Privacy from '@/pages/privacy.vue'

const wrapper = shallowMount(Privacy, {})

it('mounts properly', () => {
  expect(wrapper.isVueInstance()).toBeTruthy()
})
