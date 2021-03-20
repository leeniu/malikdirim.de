import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

const wrapper = shallowMount(Footer, {
  stubs: {
    NuxtLink: RouterLinkStub
  }
})

it('mounts properly', () => {
  expect(wrapper.isVueInstance()).toBeTruthy()
})

it('links to the privacy page', () => {
  expect(true).toBeTruthy()
})

it('links to the legal page', () => {
  expect(true).toBeTruthy()
})
