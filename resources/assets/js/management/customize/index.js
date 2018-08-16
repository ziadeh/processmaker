import Vue from 'vue'
import CustomizeLogo from './components/CustomizeLogo'
  
new Vue({
    el: '#logo-colors',
    // template: '<CustomizeLogo/>',
    components: {
    //   'sketch-picker': Sketch,
      CustomizeLogo,
    }
})
