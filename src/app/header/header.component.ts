import { Observable } from 'rxjs';
import { RealtimeDatabaseService } from './../services/realtime-database/realtime-database.service';
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
import {
  SharedService
} from '../services/shared.service';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { visitAll } from '@angular/compiler';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isExpanded: boolean = true;
  searchValue: string = "";
  public search:any = '';
  // allCompanies: Observable<any>;
  allCompanies: any;
  // singleCompanies: Observable<any>;

  currentCompany: any;
  siteUrl: string = 'www.computershare.com';
  applications: IApplication[] = [];


  constructor(private _dataService: DataService, private expandedAppbar: SharedService, private realtimeDb: RealtimeDatabaseService) {
    // Get all companies
    this.allCompanies = realtimeDb.getCompanies();
  }

  ngOnInit(): void {
    console.log('header loading');
    this.getCurrentCompany(1);
    this.getApplications();
  }


  sideNavExpand() {
    if (this.isExpanded == true) {
      this.expandedAppbar.toggleExpanded(false);
      this.isExpanded = !this.isExpanded;
    } else
    if (this.isExpanded == false) {
      this.expandedAppbar.toggleExpanded(true);
      this.isExpanded = !this.isExpanded;
    }
  }

  async getCurrentCompany(param: number) {
    console.log('get current company call with id: ' + param);
    // this._dataService.getFirebaseCollectionDocument().subscribe(val => this.currentCompany = val);
    this._dataService.getCurrentCompany(param).subscribe(val => {
      this.currentCompany = val
    });
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
    // this.currentCompany = this.getCurrentCompany();
    this._dataService.getCompany(companyId).subscribe(
      (res) => {
        this.currentCompany = res;
      }
    );
  }

  openNewTab(applicationUrl: string) {
    window.open(applicationUrl, '_blank');
  }

  searchForCompany($event: any) {
    $event.stopPropagation();
  }
}
