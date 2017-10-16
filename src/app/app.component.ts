import { Component } from '@angular/core';

import { Todo } from "./todo-data/todo";
import { todos } from  "./todo-data/todo-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todos: Todo[] = todos;
  
  createToDo(title:string) {
      const todo = new Todo(title);
      this.todos.push(todo);
  }
}
