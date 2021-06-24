import { DashboardComponent } from './dashboard/dashboard.component';
import {
  ButtonsComponent
} from './components/buttons/buttons.component';
import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { BadgesComponent } from './components/badges/badges.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'badges',
    component: BadgesComponent
  },
  {
    path: 'sidenav',
    component: SidenavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
