import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss']
})
export class TasksContainerComponent implements OnInit {

  tasks: object[] = [];
  username?: any;
  tasksLength: any = TasksContainerComponent.length;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.url[1];
    this.getTasks();

  }

  getTasks(): void  {
    this.userService.getUserTasks(this.username)
      .subscribe(data => {
        this.tasks = data;
        this.tasksLength = this.tasks.length;
      },
      err => {
        console.log(err);
      })
  }

}
