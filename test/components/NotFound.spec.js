import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import NotFound from '@/components/NotFound.vue'

const wrapper = shallowMount(NotFound, {
  stubs: {
    NuxtLink: RouterLinkStub
  }
})

it('mounts properly', () => {
  expect(wrapper.isVueInstance()).toBeTruthy()
})
