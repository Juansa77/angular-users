import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/req-response';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html'
})
export class UserCardComponent implements OnInit {
  @Input() user!: User

  ngOnInit(): void {
    if(!this.user) throw new Error("User property is required")
   }
}
