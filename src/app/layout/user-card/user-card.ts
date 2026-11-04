import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  userName = input.required<string>()
  greetings = output<string>()
  sendGreetings(){
    this.greetings.emit(`Greetings..., I am ${this.userName()}`)
  }
}
