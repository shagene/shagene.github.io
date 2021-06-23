import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';




@NgModule({
  imports: [MatButtonModule, MatIconModule, MatCardModule,MatButtonToggleModule, MatIconModule],
  exports: [MatButtonModule, MatIconModule, MatCardModule, MatButtonToggleModule, MatIconModule]
})
export class MaterialModule {}
