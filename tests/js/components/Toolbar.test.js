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
  it('should emit dragend when a tag is dragged', () => {
    let el = wrapper.findAll('a')
    for (var i = 0; i < el.length; i ++){
      el[i].trigger('dragend')
      expect(window.Event.$emit.mock.calls.length).toBe(1)
      expect(window.Event.$emit.mock.calls[0][0]).toBe("dragend")
  }})

  it('should have prop of dragable set to true', () => {
    wrapper.find("[draggable=true]").trigger
  })
})
