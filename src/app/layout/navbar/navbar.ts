import { Component, computed, signal } from '@angular/core';
import { UserCard } from '../user-card/user-card';
import { Task } from '../../interface/task';
import { ContentCard } from '../../shared/content-card/content-card';
import { GenericCardComponent } from '../../interface/generic-card-component';

@Component({
  selector: 'app-navbar',
  imports: [UserCard, ContentCard],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  appName = signal<string>("Personal Task Manager")
  userName = signal<string>('Alex')
  greetingsEventValue = signal<string>('')
  notificationCount = signal<number>(0)
  date = signal<string>(new Date(2026, 2,10,2,30).toString());
  tasks = signal<Task[]>(
    [{id:'1', title:'Learn Angular',description:'this is a angular task and should be done as it is very important concept'
        ,priority:'high',status:'completed', dueDate:this.date(), createdAt:'dateWillGetFromAPI', updatedAt:'Will get from API' , cardType:'taskList'},
      {id:'2', title:'Learn Signals',description:'this is a angular task and should be done as it is very important concept'
          ,priority:'medium',status:'pending', dueDate:this.date(), createdAt:'dateWillGetFromAPI', updatedAt:'Will get from API' , cardType:'taskList'},
      {id:'3', title:'Build Dashboard',description:'this is a angular task and should be done as it is very important concept'
          ,priority:'low',status:'pending', dueDate:this.date(), createdAt:'dateWillGetFromAPI', updatedAt:'Will get from API' , cardType:'taskList'},
      {id:'4', title:'Practise TypeScript',description:'this is a angular task and should be done as it is very important concept'
          ,priority:'high',status:'completed', dueDate:'', createdAt:'dateWillGetFromAPI', updatedAt:'Will get from API' , cardType:'taskList'},
    ]
  )

  totalTasks = computed(() => this.tasks().length)
  pendingTasks = computed(() => this.tasks().filter((task) => task.status === 'pending').length)
  completedTasks = computed(() => this.totalTasks() - this.pendingTasks())

  cardComponentDataObject = computed<GenericCardComponent[]>(() => [
    {
      cardType: 'taskOverview',
      cardHeading: 'Total Tasks',
      cardDescription: 'All Tasks',
      cardActions: { buttonLabel: '', buttonDisabled: false },
      cardMetrics: this.totalTasks(),
      cardBottomText: '' 
    },
    {
      cardType: 'taskOverview',
      cardHeading: 'Pending Tasks',
      cardDescription: 'Awaiting Completion',
      cardActions: { buttonLabel: '', buttonDisabled: false },
      cardMetrics: this.pendingTasks(),
      cardBottomText: '' 
    },
    {
      cardType: 'taskOverview',
      cardHeading: 'Completed Tasks',
      cardDescription: 'Finished Tasks',
      cardActions: { buttonLabel: '', buttonDisabled: false },
      cardMetrics: this.completedTasks(),
      cardBottomText: '' 
    }
  ])

  // Added missing property definition
  taskListCardDataObject = computed<GenericCardComponent>(() => ({
    cardType: 'taskList',
    cardHeading: 'Task List',
    cardDescription: 'Illustrative desktop wireframe. Values represent the sample tasks in your submission.',
    cardTasks: this.tasks()
  }))

  changeTaskStatusToComplete() {
    let allowOnlyOneTaskCompletion = false
    this.tasks.update((currentTasks) => 
      currentTasks.map((task) => {
        if (task.status !== 'completed' && !allowOnlyOneTaskCompletion) {
          allowOnlyOneTaskCompletion = true
          return { ...task, status: 'completed' }
        }
        return task;
      })
    )
  }

  increaseNotifications() {
    this.notificationCount.update(currentValue => ++currentValue)
  }

  resetNotification() {
    this.notificationCount.set(0)
  }

  displayGreetings(value: string) {
    this.greetingsEventValue.set(value)
  }
toggleTaskStatus(taskId: string): void {
  this.tasks.update(currentTasks =>
    currentTasks.map(task =>
      task.id === taskId
        ? {
            ...task,
            status: task.status === 'completed'
              ? 'pending'
              : 'completed',
            updatedAt: new Date().toISOString()
          }
        : task
    )
  );
}
}
