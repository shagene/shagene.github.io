import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { ResponsivenessService } from './services/responsiveness.service';
import { SharedService } from './services/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    // console.log(event.target.innerWidth);
    // console.log(event);
    this.checkScreenSize();
 }
  @ViewChild(MatSidenav)

  sidenav!: MatSidenav;
  expandedAppbar: boolean = true;
  title = 'angMatDemo';
  opened = false;
  showFiller = false;
  screenSize: any;
  displaySize: any;


  // message!: string;
  subscription!: Subscription;
  compainies: any;


  constructor(private appbarExpand: SharedService, private expandedApp: SharedService, private responsiveScreenSize: ResponsivenessService, ) {}

  ngOnInit():void {
    console.log("expandedAppbar oninit is: " + this.expandedAppbar);
    this.appbarExpand.expandAppbarObserveable.subscribe((data) => {
      this.expandedAppbar = data;
    });
  }

  getScreenSize() {
    // this.screenSize = this.responsiveScreenSize.getScreenSize();
    console.log(this.screenSize);
    if (this.screenSize == "XLarge" || "Large") {
      this.expandedApp.toggleExpanded(false);
    } else if (this.screenSize != "XLarge" || "Large") {
      this.expandedApp.toggleExpanded(true);
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
