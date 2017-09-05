import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';

import { Todo } from './todo';
import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'',
  templateUrl:'edit.component.html',
  providers:[TodoService]

})

export class EditComponent{
  @Input() todo: Todo;
}
