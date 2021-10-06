import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { DivStylesComponent } from './div-styles/div-styles.component';
import { GetDataComponent } from './get-data/get-data.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  {path: 'todoList', component:TodoListComponent},
  {path: '', component:DivStylesComponent},
  {path: 'divStyles', component:DivStylesComponent},
  {path: 'finalProject', component:GetDataComponent},
  {path: 'finalProject/getData', component:GetDataComponent},
  {path: 'finalProject/displayData', component:DisplayDataComponent},
  {path: 'finalProject**', component:GetDataComponent},
  {path: '**', component:DivStylesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
