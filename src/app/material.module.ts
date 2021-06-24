import {
  NgModule
} from "@angular/core";
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatButtonToggleModule
} from '@angular/material/button-toggle';
import {
  MatBadgeModule
} from '@angular/material/badge';
import {
  MatSidenavModule
} from '@angular/material/sidenav';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  MatListModule
} from '@angular/material/list';
import {
  MatToolbarModule
} from '@angular/material/toolbar';






@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
