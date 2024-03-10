import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(c => c.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(c => c.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];
