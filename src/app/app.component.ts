import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Todo } from './todo'
import { TodoService } from './todo.service';
import { EditComponent } from './edit.component';
import { Todos } from './mock-todo';

@Component({
  selector:'todo',
  templateUrl : './app.component.html' ,
   providers: [ TodoService ]
})

export class AppComponent implements OnInit{
  @Input() todos : Todo[];
  constructor(private route: ActivatedRoute , private todoservice: TodoService, private router:Router){}

  // getTodos(): void{
  //   this.todoservice.getTodos().then(todo=>this.todos = todo);
  // }
  ngOnInit():void{
    //this.getTodos();
    this.route.paramMap
      .switchMap((params: ParamMap)=>
      this.todoservice.getTodo(+params.get('id')))
      .subscribe((todo => this.todos = Todos));
  }
  onSelect(todo : Todo){
    this.router.navigate(['/edit',todo.id])
  }
}
