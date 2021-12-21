import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { TasksContainerComponent } from './components/tasks-container/tasks-container.component';


const routes: Routes = [
  {path: '', component: UsersContainerComponent},
  {path: 'user/:username', component: TasksContainerComponent}
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
