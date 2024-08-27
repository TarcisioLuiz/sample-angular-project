import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../../domain/new-task-data';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter()
  @Output() add = new EventEmitter<NewTaskData>()
  title = ''
  summary = ''
  date = ''

  onCancel() {
    this.cancel.emit()
  }

  onSubmit() {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      date: this.date
    })
  }

}
