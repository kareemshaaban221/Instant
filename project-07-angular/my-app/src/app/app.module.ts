import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DivStylesComponent } from './div-styles/div-styles.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { GetDataComponent } from './get-data/get-data.component';
import { DisplayDataComponent } from './display-data/display-data.component';

import { MyPipePipe } from './my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DivStylesComponent,
    TodoListComponent,
    ContainerComponent,
    MyPipePipe,
    NavbarComponent,
    GetDataComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
