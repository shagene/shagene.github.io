import {
  MaterialModule
} from './material.module';
import {
  NgModule
} from '@angular/core';
import {
  FlexLayoutModule
} from '@angular/flex-layout';
import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  ButtonsComponent
} from './components/buttons/buttons.component';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  BadgesComponent
} from './components/badges/badges.component';
import {
  SidenavComponent
} from './components/sidenav/sidenav.component';
import {
  FooterComponent
} from './footer/footer.component';
import {
  HeaderComponent
} from './header/header.component';
import {
  AppbarComponent
} from './appbar/appbar.component';
import {
  SettingsComponent
} from './components/settings/settings.component';
import {
  TermsAndConditionsComponent
} from './components/terms-and-conditions/terms-and-conditions.component';
import {
  PrivacyPolicyComponent
} from './components/privacy-policy/privacy-policy.component';
import {
  TooltipComponent
} from './components/tooltip/tooltip.component';
import {
  ReactiveFormsModule, FormsModule
} from '@angular/forms';
import {
  TableComponent
} from './components/table/table.component';
import {
  WidgetsComponent
} from './components/widgets/widgets.component';
import {
  CarouselComponent
} from './components/carousel/carousel.component';
import {
  RouterModule
} from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    DashboardComponent,
    BadgesComponent,
    SidenavComponent,
    FooterComponent,
    HeaderComponent,
    AppbarComponent,
    SettingsComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    TooltipComponent,
    TableComponent,
    WidgetsComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
