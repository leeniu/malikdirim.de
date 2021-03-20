import { mount } from '@vue/test-utils'
import Name from '@/components/Name.vue'

const wrapper = mount(Name)

it('mounts properly', () => {
  expect(wrapper.isVueInstance()).toBeTruthy()
})

it('displays the name', () => {
  expect(wrapper.text()).toMatch('Malik Dirim')
})
