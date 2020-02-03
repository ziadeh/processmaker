@extends('layouts.layout')

@section('title')
{{__('Home')}}
@endsection

@section('sidebar')
@include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_home')])
@endsection

@section('breadcrumbs')
@include('shared.breadcrumbs', ['home' => true, 'routes' => []])
@endsection
@section('content')
<div class="px-4 mt-2 page-content mb-0 container-fluid" id="home">
    <div class="row align-items-stretch" id="home-components">
        <div :class="component.sizes" class="mb-4" v-for="(component, key) in myComponents">
            <component class="homepage-card flex-fill mt-4 mt-sm-0 h-100" :is="component.name" :key="key"></component>
        </div>
    </div>
</div>
@endsection

@section('js')
<script src="{{mix('js/home/home.js')}}"></script>
@endsection

@section('css')
<style>
    
</style>
@endsection
