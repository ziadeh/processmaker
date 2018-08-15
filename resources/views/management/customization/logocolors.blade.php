@extends('layouts.layout', ['title' => 'Customization'])

@section('sidebar')
  @include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_admin')])
@endsection

@section('content')
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

        <div class="form-group">
            <label>Enter hex color or chose a color for the action buttons</label>
            <input type="text" class="form-control inline-input">
        </div>
        
    </form>
    <!-- <small class="text-mute">Logo size must be 400x100. File format .jpg or .png</small> -->
    <!-- <button type="button" aria-label="Close" class="close">x</button>  -->
    
</div>

@endsection
<script>
export default {
    data() {
        return {
            'title' : "UI Customization",
            "companyLogo": "Company Logo",
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
</style>