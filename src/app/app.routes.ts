import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/pages/users/users.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'user-list',
        component: UsersComponent,
      },
    ],
  },

  // Ruta por defecto
  {
    path: '',
    redirectTo: '/dashboard/user-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
