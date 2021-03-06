import { SearchPipe } from './services/search.pipe';
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
import { AppbarButtonComponent } from './components/appbar-button/appbar-button.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    DashboardComponent,
    BadgesComponent,
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
    AppbarButtonComponent,
    SearchPipe
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
    CarouselModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
