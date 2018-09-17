import Vue from 'vue'
import formBuilder from './form'

import FormFileUpload from '../../components/forms/file-upload'


// Bootstrap our Designer application
window.ProcessMaker.formBuilder = new Vue({
    el: '#form-container',
    components: { formBuilder }
});

let control = {
    label: "File Upload",
    component: 'FormFileUpload',
    "editor-component": "FormFileUpload",
    'editor-icon': require('../../components/forms/icons/FileUpload.png'),
    config: {
        label: "New File Upload",
        endpoint: "/designer/form-builder/upload",
        name: ''
    },
    inspector: [
        {
            type: "FormInput",
            field: "name",
            config: {
                label: "Field Name",
                name: 'Field Name',
                validation: 'required',
                helper: "The data name for this field"
            }
        },
        {
            type: "FormInput",
            field: "label",
            config: {
                label: "Field Label",
                helper: "The label describes the fields name"
            }
        },
    ]

}

// Add our custom control
window.ProcessMaker.formBuilder.$refs.builder.addControl(control, FormFileUpload, 'FormFileUpload', FormFileUpload, 'FormFileUpload')
