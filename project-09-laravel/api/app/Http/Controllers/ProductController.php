<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        return Product::all();
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3|string',
            'price' => 'required|numeric'
        ]);

        // return Product::create($request->all());
        // OR
        $p = new Product();
        $p->name = $request->name;
        $p->price = $request->price;
        
        $p->save();
        return $p;
    }

    public function show($id)
    {
        return Product::find($id);
    }
    
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|min:3|string',
            'price' => 'required|numeric'
        ]);

        // return Product::update($request->all());
        // OR
        $p = Product::find($id);
        $p->name = $request->name;
        $p->price = $request->price;
        
        $p->save();
        return $p;
    }
    
    public function destroy($id)
    {
        if(Product::destroy($id))
            return 'Deleted';

        return 'Something went wrong';
    }
}