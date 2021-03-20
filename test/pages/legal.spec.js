import { shallowMount } from '@vue/test-utils'
import Legal from '@/pages/legal.vue'

const wrapper = shallowMount(Legal, {})

it('mounts properly', () => {
  expect(wrapper.isVueInstance()).toBeTruthy()
})
