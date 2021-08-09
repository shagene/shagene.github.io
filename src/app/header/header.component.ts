import {
  DataService
} from './../services/data.service';
import {
  ICompany
} from './../services/ICompany';
import {
  IApplication
} from './../services/IApplication';
import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isExpanded: boolean = true;

  currentCompany: any;
  siteUrl: string = 'www.computershare.com';
  companies: ICompany[] = [];
  applications: IApplication[] = [];


  constructor(private _dataService: DataService, private expandedAppbar: SharedService) {
  }

  ngOnInit(): void {
    this.getCompanies();
    this.getApplications();
  }

  sideNavExpand() {
    if(this.isExpanded == true) {
      this.expandedAppbar.toggleExpanded(false);
      this.isExpanded = !this.isExpanded;
    } else
    if(this.isExpanded == false) {
      this.expandedAppbar.toggleExpanded(true);
      this.isExpanded = !this.isExpanded;
    }
  }

  getCompanies() {
    this._dataService.getCompanies().subscribe(
      (res) => {
        this.companies = res
        this.currentCompany = res[0];
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

  updateCompany(companyId: number) {
    this._dataService.getCompany(companyId).subscribe(
      (res) => {
        this.currentCompany = res;
      }
    );
  }

  openNewTab(applicationUrl: string) {
    window.open(applicationUrl, '_blank');
  }
}
