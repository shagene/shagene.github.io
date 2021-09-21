import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ResponsivenessService {

  screenSize: any;
  constructor(private breakpointObserver: BreakpointObserver) {

  }

  getScreenSize(): Observable<any> {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
          //  alert('Matches XSmall viewport');
           this.screenSize = 'XSmall';
          //  console.log( 'Matches XSmall viewport');
      }
      if (state.breakpoints[Breakpoints.Small]) {
          //  alert('Matches Small viewport');
           this.screenSize = 'Small';
          //  console.log( 'Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
          //  alert('Matches Medium  viewport');
           this.screenSize = 'Medium';
          //  console.log( 'Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {
          // alert('Matches Large viewport');
          this.screenSize = 'Large';
          // console.log( 'Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        //  alert('Matches XLarge viewport');
         this.screenSize = 'XLarge';
        //  console.log( 'Matches XLarge viewport');
      }
    });
    return this.screenSize;
  }
};
