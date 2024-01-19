import { Component, ViewChild, inject } from '@angular/core';
import { User } from '../../interfaces/req-response';
import { UserService } from '../../services/user.service';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CardListUsersComponent } from '../../components/card-list-users/card-list-users.component';
import { PaginationButtonComponent } from '../../components/pagination-button/pagination-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    SearchBarComponent,
    CardListUsersComponent,
    PaginationButtonComponent,
    CommonModule
  ],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  @ViewChild('searchBar') searchBar?: SearchBarComponent;

  public usersList: User[] = [];

  public usersService= inject(UserService)

  get users(): User[] {
    return this.usersService.usersCollection.slice(0, 5);
  }


}
