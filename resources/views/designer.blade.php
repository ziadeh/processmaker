@extends('layouts.layout')
@section('content')
    <link href="{{ asset('css/vendorDesigner.css') }}" rel="stylesheet">
    <div class="" id="appDesigner">
        <div class="main_container">
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                <toolbar></toolbar>
            </div>
            <div class="right_col" role="main">
                <actions></actions>
                <designer ref="canvas"></designer>
            </div>
            <!-- /page content -->
        </div>
    </div>
@endsection

@push('scripts')
<script src="{{ asset('js/designer.js') }}"></script>
@endpush

@section('sidebar')
    @include('sidebars.default')
@endsection
