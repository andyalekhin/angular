import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todos/todo-form/todo-form.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoSingleComponent } from './todo-single/todo-single.component';
import { TodoService } from './todo.service';

const appRoutes: Routes =[
  { 
    path: '', 
    component: TodosComponent
  },
  { 
    path: 'todo/:id', 
    component: TodoSingleComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})

export class AppModule { }