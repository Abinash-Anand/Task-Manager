import { Component, input, output } from '@angular/core';
import { GenericCardComponent } from '../../interface/generic-card-component';

@Component({
  selector: 'app-content-card',
  standalone: true,
  templateUrl: './content-card.html',
  styleUrl: './content-card.scss',
})
export class ContentCard {
  // Required configuration input for rendering taskOverviews, taskLists, or default variations
  cardComponent = input.required<GenericCardComponent>();
  
  // Output event stream for actions inside default button-based cards
  actionClick = output<void>();
 
  cardActionButton(): void {
    this.actionClick.emit();
  }
}
