@extends('layouts.layout')

@section('title')
  {{__('Users')}}
@endsection

@section('sidebar')
  @include('layouts.sidebar', ['sidebar'=> Menu::get('sidebar_admin')])
@endsection

@section('content')
<div class="container page-content" id="users-listing" v-cloak>
    <div class="row">
        <div class="col-sm-12">
            <div class="row">
                <div class="col-md-8 d-flex align-items-center col-sm-12">
                <h1 class="page-title">{{__('Users')}}</h1>
                <input v-model="filter" class="form-control col-sm-3" placeholder="{{__('Search')}}...">
                </div>
                <div class="col-md-4 d-flex justify-content-end align-items-center col-sm-12 actions">
                    <button type="button" href="#" class="btn btn-action text-white" data-toggle="modal" data-target="#addUser">
                        <i class="fas fa-plus"></i> {{__('User')}}
                    </button>
                    
                </div>
            </div>
            <users-listing ref="listing" :filter="filter"></users-listing>
        </div>
    </div>
    <create-user></create-user>
</div>

<div class="modal fade" id="addUser" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1>Create New User</h1>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    {!! Form::label('username', 'Username') !!}
                    {!! Form::text('username', null, ['class'=> 'form-control', 'v-model' => 'username']) !!}
                    <div class="invalid-feedback" v-if="addError">Example invalid feedback text</div>
                    <small id="emailHelp" class="form-text text-muted">Username must be distinct</small>
                </div>
                <div class="form-group">
                    {!! Form::label('firstname', 'First Name') !!}
                    {!! Form::text('firstname', null, ['class'=> 'form-control', 'v-model' => 'firstname']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('lastname', 'Last Name') !!}
                    {!! Form::text('lastname', null, ['class'=> 'form-control', 'v-model' => 'lastname']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('email', 'Email') !!}
                    {!! Form::text('email', null, ['class'=> 'form-control', 'v-model' => 'email']) !!}
                    <div class="invalid-feedback" v-if="addError">Example invalid feedback text</div>
                </div>
                <div class="form-group">
                    {!! Form::label('status', 'Status') !!}
                    {!! Form::select('status', ['Active', 'Inactive'], null, ['class' => 'form-control', 'v-model' => 'status']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('password', 'Password') !!}
                    {!! Form::password('password', ['class' => 'form-control', 'v-model' => 'password']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('password_confirm', 'Confirm Password') !!}
                    {!! Form::password('password_confirm', ['class' => 'form-control', 'v-model' => 'password_confirm']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('groups', 'Groups') !!}
                    <multiselect 
                    v-model="value"
                     
                    :options="options" 
                    track-by="title"
                    :custom-label="customLabel"
                    >
                        <template slot="tag" slot-scope="props" >
                            <span class="multiselect__tag  d-flex align-items-center" style="width:max-content;"></span>
                                <span class="option__desc mr-1">@{{ props.option.id }}
                                <span class="option__title">@{{ props.option.label }}</span>
                                </span>
                                <i aria-hidden="true" tabindex="1" @click="props.remove(props.option)" class="multiselect__tag-icon"></i>
                            </span>            
                            </template>         

                            <template slot="option" slot-scope="props">
                            <div class="option__desc d-flex align-items-center">
                                <span class="option__title mr-1">@{{ props.option.label }}</span>
                                <span class="option__small">@{{ props.option.id }}</span>
                            </div>
                        </template>

                    </multiselect>
                </div>
                <div>
                    
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-success" data-dismiss="modal">Close</button>
                <button type="button" @click="onSubmit" class="btn btn-success ml-2">Save</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js')

<script>
console.log('index');
    new Vue ({
        el: '#addUser',

        data: {
            firstname: '',
            lastname: '',
            email: '',
            status: '',
            password: '',
            password_confirm: '',
            username: '',
            options: {!! json_encode($groups) !!},
            group_uuids: [],
            value: []
        },
       methods: {
           onSubmit(){
            ProcessMaker.apiClient.post("/users",  {
                username: this.username,
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                status: this.status,
                password: this.password,
                password_confirm: this.password_confirm,
            })
            .then(response => {
                $('#addUser').modal('hide');
                ProcessMaker.alert('User successfully added', 'success');
            })
            .catch(error => {
                console.log(error)
            })
           },
           customLabel(option) {
                return ` ${option.label}`
            },
       } 
    })
</script>
<script src="{{mix('js/admin/users/index.js')}}"></script>
@endsection
