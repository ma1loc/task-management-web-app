import { task } from './task/user.model';
import { new_task } from './add-task/add-task.model';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

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

  // get getTasksList() {
  //   return this.dummyTasks;
  // }

  // is it correct?
  getUserTasks(userId: string): task[] {
    return this.dummyTasks.filter((user) => user.userId === userId);
  }

  deleteUserTask(Id: string) {
    this.dummyTasks = this.dummyTasks.filter((t) => t.id !== Id);
  }

  addNewTask(newTask: new_task, userId: string): void {
    this.dummyTasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
    });
  }
}
