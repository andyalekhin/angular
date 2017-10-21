import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'todo-single',
  templateUrl: 'todo-single.component.html',
  styleUrls: ['todo-single.component.css']
})

export class TodoSingleComponent implements OnInit {
  todo: Todo[] = [];
  id: number;

  private routeSubscription: Subscription;
  constructor ( private todoService: TodoService,
                private router: Router, 
                private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.todo = this.todoService.getTodo(this.id);
  }

  completeTodo() {
    this.todoService.completeTodo(this.id);
    this.router.navigate(['']);
  }

}