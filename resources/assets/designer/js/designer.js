window.Snap = require("imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js");
require("vue-resource");
window.bpmnModdle = require("bpmn-moddle");

window.moddle = new window.bpmnModdle.default();
window.Event = new Vue();

Vue.component("designer", require("./components/Designer.vue"));
Vue.component("toolbar", require("./components/Toolbar.vue"));
Vue.component("uploader-file", require("./components/UploaderFile.vue"));
Vue.component("actions", require("./components/ActionsToolbar.vue"));

new Vue({
    el: "#appDesigner",
    methods: {
        exportPMIO () {
            Event.$emit("uploadPMIO", {});
        }
    }
});
