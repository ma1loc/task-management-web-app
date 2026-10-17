import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_USERS } from '../dummy-users';
import { AddTaskComponent } from './add-task/add-task.component';
import { tasksService } from './tasks.service';

@Component({
  imports: [TaskComponent, AddTaskComponent],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;

  // tasks instance here:
  // UsersTasks = new tasksService;
  // replace the instance with the Inject function
  private UsersTasks = inject(tasksService);

  isAddedTaskClicked = false;
  TaskButtonName: string = 'Add Task';

  getUserNameUsingUserId() {
    return DUMMY_USERS.find((user) => user.id === this.userId)?.name;
  }

  onToggel() {
    this.isAddedTaskClicked = !this.isAddedTaskClicked;
    console.log(`=> ${this.isAddedTaskClicked}`);
  }
}
