@extends('layouts.layout', ['title' => 'Group Management'])

@section('sidebar')
  @include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_admin')])
@endsection

@section('content')
<div id='notificationSettings'>
  <form>
    <form-input v-model="settings.hostName" label="Host Name"></form-input>
    <form-input v-model="settings.userName" label="User Name"></form-input>
    <form-input v-model="settings.password" label="Password"></form-input>
    <form-check v-model="settings.ssl" label="SSL"></form-check>
    <form-input v-model="settings.authentication" label="Authentication"></form-input>
    <form-input v-model="settings.serverPort" label="Server Port"></form-input>
  </form>
</div>
@endsection

@section('css')
<style>

</style>
@endsection
<script>

</script>