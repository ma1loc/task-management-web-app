import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { new_task } from './add-task.model';

@Component({
  imports: [FormsModule],
  selector: 'app-add-task',
  styleUrl: './add-task.component.css',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<new_task>();

  // two-way data binding
  title = signal<string>('');
  summary = signal<string>('');
  date = signal<string>('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmet() {
    this.add.emit({
      title: this.title(),
      summary: this.summary(),
      date: this.date()
    });
  }
}
