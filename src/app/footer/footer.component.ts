import { TermsAndConditionsComponent } from './../components/terms-and-conditions/terms-and-conditions.component';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog ,MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  constructor(public dialog: MatDialog) {
  }


  openDialogTermsAndConditions(): void {
    this.dialog.open(TermsAndConditionsComponent, {
      // width: '250px',
      // height: '200px',
    });
  }

  ngOnInit(): void {
  }


}
