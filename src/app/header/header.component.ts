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
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import {
  SharedService
} from '../services/shared.service';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { visitAll } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { ResponsivenessService } from '../services/responsiveness.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    // console.log(event.target.innerWidth);
    // console.log(event);
    this.checkScreenSize();
 }

  screenSize: any;
  displaySize: any;
  isExpanded: boolean = true;
  isRecentsExpanded: boolean = false;
  isBookmarkExpanded: boolean = false;
  searchValue: string = "";
  public search:any = '';
  allCompanies: any;
  currentCompany: any;
  siteUrl: string = 'www.computershare.com';
  applications: IApplication[] = [];


  constructor(private _dataService: DataService, private expandedAppbar: SharedService, private realtimeDb: RealtimeDatabaseService, private responsiveScreenSize: ResponsivenessService) {
    // Get all companies
    this.allCompanies = realtimeDb.getCompanies();

  }

  ngOnInit(): void {
    this.getCurrentCompany(1);
    this.getApplications();
  }

  getScreenSize() {
    // this.screenSize = this.responsiveScreenSize.getScreenSize();
    console.log(this.screenSize);
    if (this.screenSize == "XLarge" || "Large") {
      this.expandedAppbar.toggleExpanded(false);
    } else if (this.screenSize != "XLarge" || "Large") {
      this.expandedAppbar.toggleExpanded(true);
    }
  }

  checkScreenSize() {
    this.screenSize = this.responsiveScreenSize.getScreenSize();
    if (this.screenSize == "XLarge" || this.screenSize == "Large") {
      this.displaySize = "Full";
      console.log('Screen Size is: ' + this.screenSize);
      console.log('Display Size is: ' + this.displaySize);
    } if (this.screenSize == "Medium" || this.screenSize == "Small") {
      this.displaySize = "Medium";
      console.log('Screen Size is: ' + this.screenSize);
      console.log('Display Size is: ' + this.displaySize);
    }
    else {
      this.displaySize = "XSmall";
      console.log('Screen Size is: ' + this.screenSize);
      console.log('Display Size is: ' + this.displaySize);
    }
    // this.getScreenSize();
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

  recentsExpanded($event: any) {
    $event.stopPropagation();
    this.isRecentsExpanded = !this.isRecentsExpanded;
  }

  bookmarkExpanded($event: any) {
    $event.stopPropagation();
    this.isBookmarkExpanded = !this.isBookmarkExpanded;
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
