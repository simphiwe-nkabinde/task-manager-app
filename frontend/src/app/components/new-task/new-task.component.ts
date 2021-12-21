import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  showMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMoreToggle(): void {
    this.showMore = !this.showMore;
  }

}
