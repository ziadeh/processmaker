@extends('layouts.layout', ['title' => 'Customization'])

@section('sidebar')
  @include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_admin')])
@endsection

@section('content')
<div id="logo-colors">
    <h1>Hello</h1>
    <customize-logo></customize-logo>
</div>

@endsection

@section('js')
<script src="js/management/customize/index.js"></script>

@endsection

<!-- @section('js')
<script src="{{'js/management/customization/index.js'}}"></script>
@endsection -->

<!-- <script>

export default {
    data() {
        return {
            'title' : "UI Customization",
            "companyLogo": "Company Logo",
        }
    },
    components: {
        CustomizeLogo
    },
    methods: {
        
    }
}
</script> -->
<!-- <style lang="scss" scoped>

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

<!-- <template> -->

<!-- </template> -->


