import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../mock/dummy-tasks';
import { User } from '../domain/user';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user?: User
  tasks = dummyTasks

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id)
  }
}
