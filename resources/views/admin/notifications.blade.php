@extends('layouts.layout', ['title' => 'Group Management'])

@section('sidebar')
  @include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_admin')])
@endsection

@section('content')
<div id='notificationSettings'>
<div class="container bg-light mt-5 p-5">
 <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Host name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail">
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">User name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail">
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail">
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail">
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Checkbox</label>
      <div class="form-check ml-3">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
      </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Authenticaton</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail">
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Server Port</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail">
    </div>
  </div>
</form>
</div>
</div>
@endsection

@section('css')
<style>

</style>
@endsection
<script>

</script>