import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  companies: any;
  // Progress Spinner code
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  // Company information
  // companyName: string = 'Disney Plus';

  constructor(fb: FormBuilder, private httpClient: HttpClient) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {
    this.getCompanies();
    // console.log(this.companies);
  }

  getCompanies() {
    this.httpClient.get("assets/dummydata/companies.json").subscribe(data => {
      // console.log(data);
      this.companies = data;
    })
  }

}
