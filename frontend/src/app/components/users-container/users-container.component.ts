import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {

  usernames: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsernames();
  }

  getUsernames(): void {
    this.userService.getUsers()
      .subscribe(data => {
        this.usernames = data;
        console.log(data);
      },
      err => {
        console.log(err);
      });
  }

}
