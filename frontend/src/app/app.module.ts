import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksContainerComponent } from './components/tasks-container/tasks-container.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    NewUserComponent,
    UsersContainerComponent,
    TasksContainerComponent,
    TaskItemComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
