import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';
import { SharedService } from './services/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  expandedAppbar: boolean = true;
  title = 'angMatDemo';
  opened = false;
  showFiller = false;


  // message!: string;
  subscription!: Subscription;
  compainies: any;


  constructor(private breakpointObserver: BreakpointObserver, private data: DataService, private appbarExpand: SharedService) {}

  ngOnInit():void {
    this.appbarExpand.expandAppbarObserveable.subscribe((data) => {
      this.expandedAppbar = data;
    });
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
           console.log( 'Matches XSmall viewport');
           alert('Matches XSmall viewport');
      }
      if (state.breakpoints[Breakpoints.Small]) {
           console.log( 'Matches Small viewport');
           alert('Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
           console.log( 'Matches Medium  viewport');
           alert('Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {
          console.log( 'Matches Large viewport');
          alert('Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
         console.log( 'Matches XLarge viewport');
         alert('Matches XLarge viewport');
      }
      if (state.breakpoints[Breakpoints.Handset]) {
        console.log( 'Matches handsets viewport');
         alert('Matches handsets viewport');
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
