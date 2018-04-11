import { mount } from '@vue/test-utils'
import ActionsToolbar from '../../../resources/assets/designer/js/components/ActionsToolbar.vue'

let wrapper = null;


describe('ActionsToolbar', () => {
  beforeEach(() => {
      wrapper = mount(ActionsToolbar)
      window.Event = {
        $emit: jest.fn()
      }
  })
  it('should emit zoomIn when zoomIn button is clicked', () => {
    wrapper.find('#zoomIn').trigger('click')
    expect(window.Event.$emit.mock.calls.length).toBe(1)
    expect(window.Event.$emit.mock.calls[0][0]).toBe("zoomIn")
  })
  it('should emit zoomReset when zoomReset button is clicked', () => {
    wrapper.find('#zoomReset').trigger('click')
    expect(window.Event.$emit.mock.calls.length).toBe(1)
    expect(window.Event.$emit.mock.calls[0][0]).toBe("zoomReset")
  })
  it('should emit zoomOut when zoomOut button is clicked', () => {
    wrapper.find('#zoomOut').trigger('click')
    expect(window.Event.$emit.mock.calls.length).toBe(1)
    expect(window.Event.$emit.mock.calls[0][0]).toBe("zoomOut")
  })

})
