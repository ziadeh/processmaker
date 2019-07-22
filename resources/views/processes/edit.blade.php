@extends('layouts.layout', ['title' => __('Processes Management')])

@section('title')
    {{__('Configure Process')}}
@endsection

@section('sidebar')
    @include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_processes')])
@endsection

@section('content')
    @include('shared.breadcrumbs', ['routes' => [
        __('Processes') => route('processes.index'),
        __('Configure') . " " . $process->name => null,
    ]])
    <div class="container" id="editProcess">
        <div class="row">
            <div class="col-12">

                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-config"
                           role="tab"
                           aria-controls="nav-config" aria-selected="true">
                            {{__('Configuration')}}
                        </a>

                        @foreach ($addons as $addon)
                            <a class="nav-item nav-link" id="{{$addon['id'] . '-tab'}}" data-toggle="tab"
                               href="{{'#' . $addon['id']}}" role="tab"
                               aria-controls="nav-notifications" aria-selected="true">
                                {{ __($addon['title']) }}
                            </a>
                        @endforeach
                    </div>
                </nav>
                <div class="card card-body card-body-nav-tabs">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-config" role="tabpanel"
                             aria-labelledby="nav-config-tab">
                            <div class="form-group">
                                {!!Form::label('processTitle', __('Name'))!!}
                                {!!Form::text('processTitle', null,
                                    [ 'id'=> 'name',
                                        'class'=> 'form-control',
                                        'v-model'=> 'formData.name',
                                        'v-bind:class' => '{\'form-control\':true, \'is-invalid\':errors.name}'
                                    ])
                                !!}
                                <small class="form-text text-muted"
                                       v-if="! errors.name">{{ __('The process name must be distinct.') }}</small>
                                <div class="invalid-feedback" v-if="errors.processTitle">@{{errors.name[0]}}</div>
                            </div>
                            <div class="form-group">
                                {!! Form::label('description', __('Description')) !!}
                                {!! Form::textarea('description', null,
                                    ['id' => 'description',
                                        'rows' => 4,
                                        'class'=> 'form-control',
                                        'v-model' => 'formData.description',
                                        'v-bind:class' => '{\'form-control\':true, \'is-invalid\':errors.description}'
                                    ])
                                !!}
                                <div class="invalid-feedback" v-if="errors.description">@{{errors.description[0]}}</div>
                            </div>
                            <div class="form-group p-0">
                                {!! Form::label('category', __('Category')) !!}
                                {!! Form::select('category', $categories, null,
                                    ['id' => 'process_category_id',
                                        'class' => 'form-control',
                                        'v-model' => 'formData.process_category_id',
                                        'v-bind:class' => '{\'form-control\':true, \'is-invalid\':errors.category}'
                                    ])
                                !!}
                                <div class="invalid-feedback" v-if="errors.category">@{{errors.category[0]}}</div>
                            </div>
                            <div class="form-group p-0">
                                {!! Form::label('cancelRequest', __('Cancel Request')) !!}
                                <multiselect v-model="canCancel"
                                             :options="activeUsersAndGroups"
                                             :multiple="true"
                                             :show-labels="false"
                                             placeholder="{{__('Type to search')}}"
                                             track-by="fullname"
                                             label="fullname"
                                             group-values="items"
                                             group-label="label">
                                    <span slot="noResult">{{__('Oops! No elements found. Consider changing the search query.')}}</span>
                                    <template slot="noOptions">
                                        {{ __('No Data Available') }}
                                    </template>
                                </multiselect>
                            </div>
                            <div class="form-group p-0">
                                {!! Form::label('cancelScreen', __('Cancel Screen')) !!}
                                {!! Form::select('screens', $screens, null,
                                    ['id' => 'screens',
                                        'class' => 'form-control',
                                        'v-model' => 'formData.cancel_screen_id',
                                        'v-bind:class' => '{\'form-control\':true, \'is-invalid\':errors.screens}'
                                    ])
                                !!}
                                <div class="invalid-feedback" v-if="errors.screens">@{{errors.screens[0]}}</div>
                            </div>
                            <div class="form-group p-0">
                                {!! Form::label('editData', __('Edit Data')) !!}
                                <multiselect v-model="canEditData"
                                             :options="activeUsersAndGroups"
                                             :multiple="true"
                                             :show-labels="false"
                                             placeholder="{{__('Type to search')}}"
                                             track-by="fullname"
                                             label="fullname"
                                             group-values="items"
                                             group-label="label">
                                    <span slot="noResult">{{__('Oops! No elements found. Consider changing the search query.')}}</span>
                                    <template slot="noOptions">
                                        {{ __('No Data Available') }}
                                    </template>
                                </multiselect>
                            </div>
                            <div class="d-flex justify-content-end mt-2">
                                {!! Form::button(__('Cancel'), ['class'=>'btn btn-outline-secondary', '@click' => 'onClose']) !!}
                                {!! Form::button(__('Save'), ['class'=>'btn btn-secondary ml-2', '@click' => 'onUpdate']) !!}
                            </div>
                        </div>
                        @foreach ($addons as $addon)
                            <div class="tab-pane fade show" id="{{$addon['id']}}" role="tabpanel"
                                 aria-labelledby="nav-notifications-tab">
                                {!! $addon['content'] !!}
                            </div>
                        @endforeach
                    </div>
                </div>

            </div>
        </div>
    </div>

@endsection

@section('js')
    <script>
      var addons = [];
    </script>
    @foreach ($addons as $addon)
        @if (!empty($addon['script']))
            {!! $addon['script'] !!}
        @endif
    @endforeach
    <script>
      test = new Vue({
        el: '#editProcess',
        mixins: addons,
        data() {
          return {
            formData: @json($process),
            dataGroups: [],
            value: [],
            errors: {
              name: null,
              description: null,
              category: null,
              status: null,
              screen: null
            },
            screens: @json($screens),
            canCancel: @json($canCancel),
            canEditData: @json($canEditData),
            activeUsersAndGroups: @json($list),
            pause_timer_start_events: false
          }
        },
        methods: {
          resetErrors() {
            this.errors = Object.assign({}, {
              name: null,
              description: null,
              category: null,
              status: null,
              screen: null
            });
          },
          onClose() {
            window.location.href = '/processes';
          },
          formatAssigneePermissions(data) {
            let response = {};

            response['users'] = [];
            response['groups'] = [];

            data.forEach(item => {
              if (item.type == 'user') {
                response['users'].push(parseInt(item.id));
              }

              if (item.type == 'group') {
                response['groups'].push(parseInt(item.id));
              }
            });
            return response;
          },
          onUpdate() {
            this.resetErrors();
            let that = this;
            this.formData.cancel_request = this.formatAssigneePermissions(this.canCancel);
            this.formData.edit_data = this.formatAssigneePermissions(this.canEditData);
            this.formData.cancel_screen_id = this.formData.cancel_screen_id
            ProcessMaker.apiClient.put('processes/' + that.formData.id, that.formData)
              .then(response => {
                ProcessMaker.alert('{{__('The process was saved.')}}', 'success');
                that.onClose();
              })
              .catch(error => {
                //define how display errors
                if (error.response.status && error.response.status === 422) {
                  // Validation error
                  that.errors = error.response.data.errors;
                }
              });
          }
        }
      });
    </script>
@endsection

@section('css')
    <style>
        .card-body-nav-tabs {
            border-top: 0;
        }

        .nav-tabs .nav-link.active {
            background: white;
            border-bottom: 0;
        }

        #table-notifications {
            margin-bottom: 20px;
        }

        #table-notifications th {
            border-top: 0;
        }

        #table-notifications td.notify {
            width: 40%;
        }

        #table-notifications td.action {
            width: 20%;
        }

        .inline-input {
            margin-right: 6px;
        }

        .inline-button {
            background-color: rgb(109, 124, 136);
            font-weight: 100;
        }

        .input-and-select {
            width: 212px;
        }

        .multiselect__tags-wrap {
            display: flex !important;
        }

        .multiselect__tag-icon:after {
            color: white !important;
        }

        .multiselect__option--highlight {
            background: #00bf9c !important;
        }

        .multiselect__option--selected.multiselect__option--highlight {
            background: #00bf9c !important;
        }

        .multiselect__tags {
            border: 1px solid #b6bfc6 !important;
            border-radius: 0.125em !important;
            height: calc(1.875rem + 2px) !important;
        }

        .multiselect__tag {
            background: #788793 !important;
        }

        .multiselect__tag-icon:after {
            color: white !important;
        }
    </style>
@endsection
