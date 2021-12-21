import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() taskItem?: any;
  showMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMoreToggle(): void {
    this.showMore = !this.showMore;
  }

}
