@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card bg-dark">
                <h3 class="card-header">{{ __('Dashboard') }}</h3>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('Welcome to your drive!') }}
                    <br>
                    To add new file <a href="{{route('create')}}">click here</a>!
                    <br>
                    To list your file &nbsp;<a href="{{route('index')}}">click here</a>!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
