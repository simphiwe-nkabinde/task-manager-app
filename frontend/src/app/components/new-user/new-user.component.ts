import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUsername: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addNewUser(event: any): void {
    let newUser = event.target.previousSibling.value;
    this.userService.addNewUser(newUser).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
}
