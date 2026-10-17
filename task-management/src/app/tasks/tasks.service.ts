import { task } from './task/user.model';
import { new_task } from './add-task/add-task.model';
import { Injectable } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class tasksService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.dummyTasks = JSON.parse(tasks);
    }
  }

  // get getTasksList() {
  //   return this.dummyTasks;
  // }

  // is it correct?
  getUserTasks(userId: string): task[] {
    return this.dummyTasks.filter((user) => user.userId === userId);
  }

  // Create a method that will be saving out updates
  private saveItems() {
    localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
  }

  deleteUserTask(Id: string) {
    this.dummyTasks = this.dummyTasks.filter((t) => t.id !== Id);
    this.saveItems();
  }

  addNewTask(newTask: new_task, userId: string): void {
    this.dummyTasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
    });
    this.saveItems();
  }
}
