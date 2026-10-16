import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type task } from './user.model';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-task',
  styleUrl: './task.component.css',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() Usertask!: task;
  @Output() complite = new EventEmitter<string>();

  onComplitedClick() {
    this.complite.emit(this.Usertask.id);
  }
}
