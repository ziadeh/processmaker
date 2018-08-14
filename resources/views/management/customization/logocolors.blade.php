@extends('layouts.layout', ['title' => 'Customization'])

@section('sidebar')
  @include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_admin')])
@endsection

@section('content')
<h1>Yo</h1>
@endsection