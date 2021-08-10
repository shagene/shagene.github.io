import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
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
import {
  BadgesComponent
} from './components/badges/badges.component';
import {
  SettingsComponent
} from './components/settings/settings.component';
import { TableComponent } from './components/table/table.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { CarouselComponent } from './components/carousel/carousel.component';

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
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'privacypolicy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'termsandconditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'tables',
    component: TableComponent
  },
  {
    path: 'widgets',
    component: WidgetsComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
