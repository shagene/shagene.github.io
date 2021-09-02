import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ResponsivenessService {

  constructor(private breakpointObserver: BreakpointObserver) {
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
};
