import { Component,Input } from '@angular/core';
import { Todo } from './todo'

@Component({
  selector:'edit',
  templateUrl:'./edit.component.html',

})

export class EditComponent{
  @Input() todo: Todo;
}
