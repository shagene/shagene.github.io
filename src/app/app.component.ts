import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title = 'angMatDemo';
  opened = false;
  showFiller = false;


  // message!: string;
  subscription!: Subscription;
  compainies: any;


  constructor(private observer: BreakpointObserver, private data: DataService) {}



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
