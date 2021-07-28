import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';


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


  // message!: string;
  subscription!: Subscription;
  compainies: any;


  constructor(private observer: BreakpointObserver, private data: DataService) {}

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
    // window.navigator.vibrate(500);

    // this.subscription = this.data.currentMessage.subscribe(message => this.message = message);
    // const getCompainies = this.data.cast.subscribe((data) => {
    //   console.log(data);
    // });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
