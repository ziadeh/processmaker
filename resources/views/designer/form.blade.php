@extends('layouts.layout')
@section('content')
    <div id="form-container">
        <form-builder ref="builder" :process="{{$process}}" :form="{{$form}}"></form-builder>
    </div>
@endsection

@section('sidebar')
    @include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_designer')])
@endsection

@section('js')
    <script src="{{ mix('js/formBuilder/main.js') }}"></script>
@endsection

@section('meta')
      <meta name="file-upload-endpoint" content="/designer/form-builder/upload">
@endsection
