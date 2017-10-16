import { Component, Input } from "@angular/core";
import { Todo } from "../todo-data/todo";

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
  @Input() todos: Todo[];

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);

    if (index >= 0) {
      this.todos.splice(index, 1)
    }
  }
}