import { TermsAndConditionsComponent } from './../components/terms-and-conditions/terms-and-conditions.component';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog ,MatDialogRef} from '@angular/material/dialog';
import { PrivacyPolicyComponent } from '../components/privacy-policy/privacy-policy.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  expandedAppbar: boolean = true;

  constructor(public dialog: MatDialog, private appbarExpand: SharedService) {
  }


  openDialogTermsAndConditions(): void {
    this.dialog.open(TermsAndConditionsComponent, {
      // width: '250px',
      // height: '200px',
    });
  }

  openDialogPrivacyPolicy(): void {
    this.dialog.open(PrivacyPolicyComponent, {
      // width: '250px',
      // height: '200px',
    });
  }

  ngOnInit(): void {
    this.appbarExpand.expandAppbarObserveable.subscribe((data) => {
      this.expandedAppbar = data;
    });
  }


}
