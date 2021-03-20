import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Header from '@/components/Header.vue'

const wrapper = shallowMount(Header, {
  stubs: {
    NuxtLink: RouterLinkStub
  }
})

it('mounts properly', () => {
  expect(wrapper.isVueInstance()).toBeTruthy()
})
