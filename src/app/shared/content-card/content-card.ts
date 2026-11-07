import { Component, input, output } from '@angular/core';
import { actionButtonType, GenericCardComponent, PriorityType } from '../../interface/generic-card-component';
import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { Task } from '../../interface/task';
import { AppTaskHover } from '../custom-directives/app-task-hover';
import { ActionButton } from '../custom-directives/action-button';
@Component({
  selector: 'app-content-card',
  imports: [DatePipe, NgTemplateOutlet, AppTaskHover, ActionButton],
  standalone: true,
  templateUrl: './content-card.html',
  styleUrl: './content-card.scss',
})
export class ContentCard {
  // Required configuration input for rendering taskOverviews, taskLists, or default variations
  cardComponent = input.required<GenericCardComponent>();
  // Output event stream for actions inside default button-based cards
  actionClick = output<{taskId:string, eventLabel:string}>();
 

    taskPriorityType = { priority: 'medium' as PriorityType }; 
    readonly PRIORITY_CONFIG: { [key: string]: { classes: string; label: string } } = {
      low: {
        classes: 'bg-slate-100 text-slate-700 font-medium',
        label: 'low'
      },
      medium: {
        classes: 'bg-amber-100 text-amber-800 font-medium',
        label: 'Medium priority'
      },
      high: {
        classes: 'bg-red-100 text-red-700 font-bold',
        label: 'High priority'
      }
    };

taskButtonAction(event: { taskId: string; eventLabel: actionButtonType }) {
  if (event.eventLabel === 'markAsCompleted') {
    // set status to 'completed'
  } else if (event.eventLabel === 'reOpen') {
    // set status to 'pending'
  } else if (event.eventLabel === 'delete') {
    // remove task
  }
}


}
