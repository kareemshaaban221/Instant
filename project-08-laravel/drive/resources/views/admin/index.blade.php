@extends('layouts.app')


@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                @if(Session::has('done'))
                    <div class="alert alert-success text-center">
                        {{Session::get('done')}}
                    </div>
                @endif
                <div class="card bg-dark">
                    <h3 class="card-header">Your Files</h3>
                    <div class="card-body">
                        <table class="table table-primary mx-auto">
                            <tr>
                                <th>File ID</th>
                                <th>File Name</th>
                                <th>Uploader Name</th>
                                <th>Actions</th>
                            </tr>
                            {{-- @if (Session::has('files')) --}} {{-- Not working !!!!!! --}}
                                
                                @if (isset($files))

                                    @php $i = 0 @endphp
                                    @foreach ($files as $file)
                                        <tr>
                                            <td>{{$file['id']}}</td>
                                            <td><input type="text" readonly class="form-control-plaintext p-0" value="{{$file['file_name']}}"></td>
                                            {{-- <td>{{$uploader[$i]->name}}</td> --}}
                                            <td>{{Auth::user()->name}}</td>
                                            <td>
                                                <a href="{{route('show', $file['id'])}}" class="p-2 text-info" title="Show">
                                                    <li class="fa fa-eye"></li>
                                                </a>
                                                <a href="{{route('edit', $file['id'])}}" class="p-2" title="Edit">
                                                    <li class="fa fa-edit"></li>
                                                </a>
                                                <a href="{{route('destroy', $file['id'])}}" class="p-2 text-danger" title="Delete"
                                                    onbeforeunload="true">
                                                    <li class="fa fa-trash"></li>
                                                </a>
                                            </td>

                                            {{-- @if($uploader[$i]->id == Auth::user()->id)
                                                <td>
                                                    <form action="">
                                                        <button type="submit" class="btn p-0">
                                                            <a href="" class="d-block"><li class="fa fa-eye"></li></a>
                                                        </button>
                                                    </form>
                                                    
                                                </td>
                                            @else
                                                <td>--</td>
                                            @endif --}}
                                            
                                        </tr>
                                        @php $i++ @endphp
                                    @endforeach

                                @endif
                            {{-- @endif --}}
                            
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
@endsection