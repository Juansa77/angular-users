import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/req-response';
import { UserCardComponent } from '../user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list-users',
  standalone: true,
  imports: [UserCardComponent, CommonModule],
  templateUrl: './card-list-users.component.html',

})
export class CardListUsersComponent {
  @Input()
  public users:User[]=[]
}
