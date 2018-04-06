
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
//window.Vue = require('vue');
require('vue-resource');
window.BpmnModdle = require('bpmn-moddle');
window.moddle = new BpmnModdle.default();
window.Event = new Vue();
window.Snap = require('imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js');

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    Vue.http.interceptors.push((request, next) => {
        request.headers.set('X-CSRF-TOKEN', token.content);
        next();
    });
}

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('designer', require('./components/Designer.vue'));
Vue.component('toolbar', require('./components/Toolbar.vue'));
Vue.component('uploader-file', require('./components/UploaderFile.vue'));
Vue.component('actions', require('./components/ActionsToolbar.vue'));


const appDesigner = new Vue({
    el: '#appDesigner',
    methods : {
        exportPMIO()  {
            Event.$emit('uploadPMIO', {});
        }
    }
});
