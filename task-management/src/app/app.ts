import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

// Dummy-users:
import { DUMMY_USERS } from './dummy-users';


@Component({
  imports: [HeaderComponent, UserComponent, TasksComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
	// selectedUsers = signal(DUMMY_USERS);
	selectedUsers = DUMMY_USERS;

  userId: string = '';

  onSelectUser(id: string) {
    this.userId = id;
    console.log(`the user ID: ${id} is init`);
  }

  get getDefultUserId() {
    return this.userId;
  }
}
