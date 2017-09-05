import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { EditComponent } from './edit.component';
//import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
      // {
      //   path:'',
      //   redirectTo:'/home',
      //   component:AppComponent
      // },
      {
        path:'edit/:id',
        component:EditComponent
      }
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
