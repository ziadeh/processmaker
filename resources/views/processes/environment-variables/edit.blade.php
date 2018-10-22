@extends('layouts.layout')

@section('title')
  {{__('Edit EnvironmentVariable')}}
@endsection

@section('sidebar')
@include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_processes')])
@endsection

@section('content')
@endsection

@section('js')
@endsection