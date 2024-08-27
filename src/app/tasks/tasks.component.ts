import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../mock/dummy-tasks';
import { User } from '../domain/user';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from '../domain/new-task-data';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user?: User
  tasks = dummyTasks
  isAddingTask: boolean = false

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = !this.isAddingTask
  }

  onCancelAddTask() {
    this.isAddingTask = false
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.user!.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false
  }
}
