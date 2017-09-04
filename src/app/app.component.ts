import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from './todo'
import { TodoService } from './todo.service';
import { EditComponent } from './edit.component';

@Component({
  selector:'todo',
  templateUrl : './app.component.html' ,
    providers: [ TodoService ]
})

export class AppComponent implements OnInit{
  todos : Todo[];
  constructor(private todoservice: TodoService, private router:Router){}

  getTodos(): void{
    this.todoservice.Todos().then(todos=>this.todos = todos);
  }
  ngOnInit():void{
    this.getTodos();
  }
  edit(){
    this.router.navigate([/edit, this.todo.id])
  }
}
