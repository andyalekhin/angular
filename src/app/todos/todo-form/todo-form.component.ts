import { Component } from '@angular/core';

import { TodoService } from '../../todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {

  constructor (private todoService: TodoService) {}

  addTodo(title: string, description: string) {
    this.todoService.addTodo(title, description);
  }

}