import Vue from 'vue'

import {
  FormInput,
  FormCheckbox
} from '@processmaker/vue-form-elements/src/components'

new Vue({
  el: '#notificationSettings',
  data: {
    settings: {
      hostName: '',
      userName: '',
      password: '',
      ssl: false,
      authentication: '',
      serverPort: ''
    }
  },
  components: {
    FormInput,
    FormCheckbox
  }

});