import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
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


  constructor(private observer: BreakpointObserver, private data: DataService, private appbarExpand: SharedService) {}

  ngOnInit():void {
    this.appbarExpand.expandAppbarObserveable.subscribe((data) => {
      this.expandedAppbar = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
