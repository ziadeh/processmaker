<template>
<div class="container page-content" id="logo-colors">
    <h4>UI Customization</h4>
    <h5>Add your company logo</h5>
    <form>
        <div class="custom-file">
            <input type="file" class="custom-file-input" id="validatedCustomFile" required>
            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
            <small class="">Logo size must be 400x100. File format .jpg or .png</small>
        </div>

        <div class="custom-file">
            <input type="file" class="custom-file-input" id="validatedCustomFile" required>
            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
            <small class="">Logo size must be 400x100. File format .jpg or .png</small>
        </div>
        <!-- <div class="form-group">
            <input type="file" class="form-control" id="pickLogo">
            <label class="form-control-label" for="pickLogo"></label>
        </div> -->

        <h5 style="mt-5">Create a color scheme to customize your UI</h5>
        <div class="form-group">
            <label>Enter hex color or chose a color for the left navigation bar</label>
            <input type="text" class="form-control inline-input">
        </div>
        <sketch v-model="colors" />
        <div class="form-group">
            <label>Enter hex color or chose a color for the action buttons</label>
            <input type="text" class="form-control inline-input">
        </div>
        
    </form>
    <!-- <small class="text-mute">Logo size must be 400x100. File format .jpg or .png</small> -->
    <!-- <button type="button" aria-label="Close" class="close">x</button>  -->
    
</div>
</template>

<script>
import Sketch from 'vue-color'

var colors = {
    hex: '#194d33',
    hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
    hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
    rgba: { r: 25, g: 77, b: 51, a: 1 },
    a: 1
  }

export default {
    components:{
        Sketch,
    },
    data() {
        return {
            title : "UI Customization",
            companyLogo: "Company Name",
            colors
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>

.inline-button {
  background-color: rgb(109,124,136);
  font-weight: 100;
}

.text-mute {
    color: #788793;
}
.custom-file {
    height: auto !important;
}
.custom-file-label::after {
    content: "Choose" !important;
}
</style> -->
