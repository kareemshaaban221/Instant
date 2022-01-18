<?php

namespace App\Http\Controllers;

use App\Drive;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PDO;

class FileController extends Controller
{
    
    public function index()
    {
        try{

            // this code for display all files regardless uploader_id
            // $files = Drive::all();
            // $uploader = [];
            // foreach($files as $file){
            //     $uploader[] = User::find($file->uploader_id);
            // }
            // return view('admin.index')->with('uploader', $uploader)->with('files', $files);

            $query = 'SELECT * FROM files where uploader_id = ' . Auth::user()->id;
            $conn = new PDO('mysql:dbname=drive;host=localhost', 'root', '');
            $files = $conn->query($query)->fetchAll(PDO::FETCH_ASSOC);
            // $files = Drive::where('uploader_id', Auth::user()->id); // not working !!
            return view('admin.index')->with('files', $files);
        }
        catch(Exception $e){
            return view('admin.index');
        }
    }
    
    public function create()
    {
        return view('admin.create');
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|min:3',
            'desc'  => 'required|min:5',
            'file'  => 'required|file|max:1000000|mimes:png,jpg'
        ]);
        $record = new Drive();
        $record->title = $request->title;
        $record->description = $request->desc;
        $record->uploader_id = Auth::user()->id;
        // img
        $img = $request->file('file');
        $imgName = $img->getClientOriginalName();
        $img->move(public_path() . '/uploads/', $imgName);

        $record->file_name = $imgName;
        $record->save();
        return redirect(route('index'))->with('done', 'File is added successfully');
    }

    public function show($id)
    {
        $file = Drive::find($id);
        return view('admin.show')->with('file', $file);
    }

    public function edit($id)
    {
        $file = Drive::find($id);
        return view('admin.edit', compact('file', $file));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|min:3',
            'desc'  => 'required|min:5',
            'file'  => 'required|file|max:1000000|mimes:png,jpg'
        ]);
        $file = Drive::find($id);
        $path = public_path('uploads/' . $file->file_name);
        if(!unlink($path)){
            throw new Exception("Error deleting the file!");
        }

        $file->title = $request->title;
        $file->description = $request->desc;
        // img
        $img = $request->file('file');
        $imgName = $img->getClientOriginalName();
        $img->move(public_path() . '/uploads/', $imgName);

        $file->file_name = $imgName;
        $file->save();
        return redirect(route('index'))->with('done', 'File is updated successfully');
    }
    
    public function destroy($id)
    {
        Drive::destroy($id);
        return redirect(route('index'))->with('done', 'File is deleted successfully');
    }

    public function download($id)
    {
        $file = Drive::where('id', $id)->firstOrFail();
        $path = public_path('uploads/' . $file->file_name);
        return response()->download($path);
    }
}
