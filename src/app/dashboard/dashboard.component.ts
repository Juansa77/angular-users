import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
constructor(){
  console.log("constructor en dashboard")
}
}
