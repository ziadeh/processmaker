@extends('layouts.layout', ['title' => 'Customization'])

@section('sidebar')
  @include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_admin')])
@endsection

@section('content')
<div class="container page-content" id="logo-colors">
    <h4>UI Customization</h4>
    <h5>Add your company logo</h5>
    <form>
        <div class="form-group">
            <div class="d-flex">
                <input type="text" class="form-control inline-input">
                <button type="submit" class="btn inline-button text-light">Choose</button>
            </div>
            <small id="addCompanyLogo" class="text-mute">Logo size must be 400x100. File format .jpg or .png</small>
        </div>

        <div class="form-group">
            <div class="d-flex">
                <input type="text" class="form-control inline-input">
                <button type="submit" class="btn inline-button text-light">Choose</button>
            </div>
            <small id="addCompanyLogo" class="text-mute">Logo size must be 400x100. File format .jpg or .png</small>
        </div>

        <h5>Create a color scheme to customize your UI</h5>
        <div class="form-group">
            <label>Enter hex color or chose a color for the left navigation bar</label>
            <input type="text" class="form-control inline-input">
        </div>

        <div class="form-group">
            <label>Enter hex color or chose a color for the action buttons</label>
            <input type="text" class="form-control inline-input">
        </div>
        
    </form>
    
    
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
</style>