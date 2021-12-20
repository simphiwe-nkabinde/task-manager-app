import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    NewUserComponent,
    UsersContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
