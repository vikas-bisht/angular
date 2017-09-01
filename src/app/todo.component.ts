import { Component, OnInit } from '@angular/core'

import { Todo } from './todo';
import { todoservice } from './todoservice';

@Component({
  selector: 'todo',
  templateUrl :'app.component.html',
  providers: [todoservice]
})

export class TodoComponent implements OnInit {
  todos: Todo[];
  selectedTodo: Todo;

  constructor(private todoservice: todoservice){}

  getTodos(): void{
    this.todoservice.getTodos().then(todos=>this.todos=todos);
  }
  ngOnInit(): void{
    this.getTodos();
  }
  onselect(todo:Todo):void{
    this.selectedTodo = todo;
  }
}
