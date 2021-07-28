import { DataService } from './../services/data.service';
import { ICompany } from './../services/ICompany';
import { IApplication } from './../services/IApplication';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  firstCompany: any;
  companies: ICompany[] = [];
  applications: IApplication[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getCompanies();
    this.getApplications();
  }

  getCompanies() {
    this._dataService.getCompanies().subscribe(
      (res) => {
        this.companies = res
        this.firstCompany = res[0];
      },
      (err) => console.log(err)
    );
  }

  getApplications() {
    this._dataService.getApplications().subscribe(
      (res) => {
        this.applications = res
      },
      (err) => console.log(err)
    );
  }
}
