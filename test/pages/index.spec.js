import { shallowMount } from '@vue/test-utils'
import Home from '@/pages/index.vue'

const wrapper = shallowMount(Home, {})

it('mounts properly', () => {
  expect(wrapper.isVueInstance()).toBeTruthy()
})
