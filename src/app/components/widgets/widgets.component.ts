import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { DataService } from 'src/app/services/data.service';
import { ICompany } from 'src/app/services/ICompany';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  // Custom Button Widgets
  companies: ICompany[] = [];

  // Progress Spinner code
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;


  constructor(fb: FormBuilder, private _dataService: DataService) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this._dataService.getCompanies().subscribe(
      (res) => {
        this.companies = res
      },
      (err) => console.log(err)
    );
  }

}
