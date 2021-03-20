import { shallowMount } from '@vue/test-utils'
import Avatar from '@/components/Avatar.vue'

const wrapper = shallowMount(Avatar, {})

it('mounts properly', () => {
  expect(wrapper.isVueInstance()).toBeTruthy()
})
