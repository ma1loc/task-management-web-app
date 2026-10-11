import { Component, computed, input, Input, signal } from '@angular/core';

// import { DUMMY_USERS } from './dummy-users';

// const randIdx = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  // //   > no-single:
  //     selectedUser = DUMMY_USERS[randIdx];
  // //   > with signal:
  //   selectedUser = signal(DUMMY_USERS[randIdx]);
  /* NOTE >>> **`computed()` in short:**
	- It creates a **read-only signal** whose value is **derived from other signals**.
	- Use it when you need a value *calculated from* signals (like `fullname` from `firstName` and `lastName`), not when you just need a signal's own value.
	- It **tracks** the signals it reads. When one of them changes, it's marked stale.
	- It's **lazy**: the function only re-runs when something reads it after a dependency changed.
	- It's **cached**: if nothing changed, it returns the stored result without re-running.
	- You read it by calling it, `fullname()`, and templates depending on it update automatically.
	- You can't `set` it, because its value always comes from its dependencies.
  */
  // selectUserAvatar = computed(() => 'users/' + this.selectedUser().avatar);
  //   get getUser() {
  //     // return '/users' + this.selectedUser[1];
  //     return this.selectedUser;
  //   }
  //   onSelectUser(): void {
  // const randIdx = Math.floor(Math.random() * DUMMY_USERS.length);
  // // > no-single:
  // this.selectedUser = DUMMY_USERS[randIdx];
  // // > with-signal:
  // this.selectedUser.set(DUMMY_USERS[randIdx]);
  // console.log('clicked!!!!');
  //   }

  /*
		NOTE >>> every component used will set the Avatar input.
		- {required} IN the Input make value required.
  */
    @Input({required: true}) Avatar!: string;
    @Input({required: true}) Name!: string;

    get imagePath() {
      return 'users/' + this.Avatar;
    }

  //  >>> Signal
//   Avatar = input.required<string>();
//   Name = input.required<string>();

//   imagePath = computed(() => {
//     return 'users/' + this.Avatar();
//   });

  onSelectUser() {
    console.log(`clicked to user =>f ${this.Name}`);
  }
}
