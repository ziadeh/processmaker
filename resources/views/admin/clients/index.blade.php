@extends('layouts.layout')

@section('content')
<div class="container ml-2">
  <div id="clients">
    <passport-clients></passport-clients>
    <passport-authorized-clients></passport-authorized-clients>
    <passport-personal-access-tokens></passport-personal-access-tokens>
  
  </div>

</div>
@endsection

@section('sidebar')
  @include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_admin')])
@endsection

@section('js')
<script src="{{mix('js/admin/clients/index.js')}}"></script>

@endsection
