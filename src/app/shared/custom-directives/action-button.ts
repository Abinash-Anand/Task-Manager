import { computed, Directive, input } from '@angular/core';
import { actionButtonType } from '../../interface/generic-card-component';
export const ACTION_BUTTON_CONFIG: Record<actionButtonType, { label: string; classes: string }> = {
  markAsCompleted: {
    label: 'Mark as Completed',
    classes: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',
  },
  reOpen: {
    label: 'Re-open',
    classes: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
  },
  delete: {
    label: 'Delete',
    classes: 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100',
  },
};

const BASE_CLASSES = 'w-full px-2.5 py-1 text-xs font-medium rounded border transition-colors cursor-pointer'
@Directive({
  selector: 'button[appActionButton]',
  standalone:true,
  host:{
    '[class]' : 'actionButtonClasses()',
    '[textContent]': 'buttonText()',
  }
})
export class ActionButton {
  actionType = input.required<actionButtonType>({ alias: 'appActionButton' });

  protected actionButtonClasses = computed(() => {
    const variant = ACTION_BUTTON_CONFIG[this.actionType()].classes;
    return `${BASE_CLASSES} ${variant}`;
  });

  protected buttonText = computed(() => {
    return ACTION_BUTTON_CONFIG[this.actionType()].label;
  });

}
