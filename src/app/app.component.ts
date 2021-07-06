import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title = 'angMatDemo';
  opened = false;
  showFiller = false;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    // this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
    //   if (res.matches) {
    //     this.sidenav.mode = 'over';
    //     this.sidenav.close();
    //   } else {
    //     this.sidenav.mode = 'side';
    //     this.sidenav.open();
    //   }
    // });
  }

  ngOnInit(): void {
    // console.log(navigator.userAgent);
  }
}
