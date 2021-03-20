import { shallowMount } from '@vue/test-utils'
import Slogan from '@/components/Slogan.vue'

const wrapper = shallowMount(Slogan, {})

it('mounts properly', () => {
  expect(wrapper.isVueInstance()).toBeTruthy()
})

it('displays the current slogan', () => {
  expect(wrapper.text()).toMatch('Full-Stack Web-Developer')
})
