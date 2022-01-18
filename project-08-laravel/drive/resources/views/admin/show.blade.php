@extends('layouts.app')


@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card bg-dark position-relative">
                    <div class="card-header">
                        <img src="{{asset("uploads/$file->file_name")}}" class="card-img-top" alt="">
                    </div>
                    <div class="card-body">
                        <a href="{{route('index')}}" title="Back" class="text-light position-absolute" style="left: 10px;top: 10px"><li class="fa fa-arrow-circle-left fa-2x"></li></a>
                        <table class="table border-dark text-light">
                            <tr>
                                <th class="text-right col-6"><label for="title">Title: </label></th>
                                <td><input id="title" class="form-control-plaintext text-light p-0" readonly value="{{$file->title}}"></td>
                            </tr>
                            <tr>
                                <th class="text-right col-6"><label for="desc">Description: </label></th>
                                <td><textarea id="desc" class="form-control-plaintext text-light p-0" readonly rows="1" style="resize: none">{{$file->description}}</textarea></td>
                            </tr>
                            <tr>
                                <th class="text-right col-6"><label for="up">Uploader: </label></th>
                                <td><input id="up" class="form-control-plaintext text-light p-0" readonly value="{{Auth::user()->name}}"></td>
                            </tr>
                            <tr>
                                <th colspan="2" class="text-center">
                                    <a href="{{route('download', $file->id)}}" class="text-light text-decoration-none border p-1 rounded">Download</a>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection