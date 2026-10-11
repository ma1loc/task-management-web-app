import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

// Dummy-users:
import { DUMMY_USERS } from './dummy-users';


@Component({
  imports: [HeaderComponent, UserComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
	// selectedUsers = signal(DUMMY_USERS);
	selectedUsers = DUMMY_USERS;
}
