import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TodoComponent }  from './todo.component';
import { AppComponent }  from './app.component';
import { TodoDetailComponent }  from './tododetail.component';
import { todoservice }  from './todoservice';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'todos',
        component: AppComponent
      }
    ])
  ],
  declarations: [
    TodoComponent,
    TodoDetailComponent
  ],
  bootstrap: [ TodoComponent,AppComponent ],
  providers: [ todoservice ]
})
export class AppModule { }
