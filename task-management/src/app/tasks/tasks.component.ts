import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_USERS } from '../dummy-users';
import { dummyTasks } from './dummyTask';

@Component({
  imports: [TaskComponent],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;

  getUserNameUsingUserId() {
    return DUMMY_USERS.find((user) => user.id === this.userId)?.name;
  }

  dummyTask = dummyTasks;
}
