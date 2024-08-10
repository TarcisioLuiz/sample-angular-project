import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './mock/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './domain/user';

// type User = {
//   id: string
//   avatar: string
//   name: string
// }

// interface User {
//   id: string
//   avatar: string
//   name: string
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-angular-project';
  users = DUMMY_USERS;
  userSelected?: User

  onSelectUser(id: string) {
    this.userSelected = this.users.find((user) => user.id === id)
    console.log('Selected user with id ' + id)
  }
}
