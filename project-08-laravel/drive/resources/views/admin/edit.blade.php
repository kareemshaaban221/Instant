@extends('layouts.app')


@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card bg-dark">
                <h3 class="card-header">
                    <a href="{{route('index')}}" title="Back" class="text-light mr-2"><li class="fa fa-arrow-circle-left"></li></a>
                    Edit file : {{$file->id}}
                </h3>
                <div class="card-body overflow-auto">
                    <form action="{{route('update', $file->id)}}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="name">Title</label>
                            <input type="text" class="form-control" id="name"
                                aria-describedby="emailHelp" name="title" value="{{$file->title}}">
                            @if ($errors->has('title'))
                                <div class="alert p-0 text-danger">*{{$errors->first('title')}}</div>
                            @endif
                        </div>
                        <div class="form-group">
                            <label for="desc">Description</label>
                            <input type="text" class="form-control" id="desc" name="desc" value="{{$file->description}}">
                            @if ($errors->has('desc'))
                                <div class="alert p-0 text-danger">*{{$errors->first('desc')}}</div>
                            @endif
                        </div>
                        <div class="form-group">
                            <label for="file">Your File : {{$file->file_name}}</label>
                            <input type="file" class="form-control bg-transparent border-dark text-light p-0" name="file" id="file">
                            @if ($errors->has('file'))
                                <div class="alert p-0 text-danger">*{{$errors->first('file')}}</div>
                            @endif
                        </div>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection