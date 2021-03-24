import { mount } from '@vue/test-utils'
import { contactData } from '@/mixins'

const Component = {
  render() {},
  mixins: [contactData]
}
const wrapper = mount(Component)

test('to contain the data as expected', () => {
  expect(wrapper.vm.$data.contact.name).toBe('Malik Dirim')
  expect(wrapper.vm.$data.contact.street).toBe('Heerstr. 454')
  expect(wrapper.vm.$data.contact.city).toBe('13593 Berlin')
  expect(wrapper.vm.$data.contact.country).toBe('Deutschland')
  expect(wrapper.vm.$data.contact.email.legal).toBe('impressum@malikdirim.de')
  expect(wrapper.vm.$data.contact.email.privacy).toBe('datenschutz@malikdirim.de')
})
