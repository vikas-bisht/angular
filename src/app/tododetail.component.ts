import { Component, Input } from '@angular/core';
import { Todo } from './todo';
import { todoservice } from './todoservice';

@Component({
  selector: 'todo-detail',
  templateUrl: './tododetail.component.html',
})

export class TodoDetailComponent{
  @Input() todo: Todo;
}
