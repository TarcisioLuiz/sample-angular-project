import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../domain/task';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task?: Task
  @Output() complete = new EventEmitter<string>()

  onCompleteTask() {
    this.complete.emit(this.task?.id)
  }
}
