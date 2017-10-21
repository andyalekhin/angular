import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable()
export class TodoService {
  todos: Todo[] = [
    { 
      id: 1, 
      complete: false, 
      title: 'coffee', 
      description: 'black' 
    },
    { 
      id: 2, 
      complete: false, 
      title: 'milk', 
      description: 'white' 
    },
    { 
      id: 3, 
      complete: true, 
      title: 'sugar', 
      description: 'sweet' 
    }
  ];

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodo(id): any {
    return this.todos[id - 1];
  }

  addTodo(title: string, description: string) {
    let id = this.todos.length + 1;
    this.todos.push({
      id: id, 
      complete: false, 
      title: title, 
      description: description
    });
  }

  completeTodo(id) {
    this.todos[id - 1].complete = true;
  }

}