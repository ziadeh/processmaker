import { mount } from '@vue/test-utils'
import Toolbar from '../../../resources/assets/designer/js/components/Toolbar.vue'

let wrapper = null;


describe('Toolbar', () => {
  beforeEach(() => {
      wrapper = mount(Toolbar)
      window.Event = {
        $emit: jest.fn()
      }
  })
  it('should emit dragend when dragend button is clicked', () => {
    wrapper.find('a').trigger('dragend')
    expect(window.Event.$emit.mock.calls.length).toBe(1)
    expect(window.Event.$emit.mock.calls[0][0]).toBe("dragend")
  })

})
