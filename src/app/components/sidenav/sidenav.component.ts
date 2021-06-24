import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  opened = false;
  log(state: any) {
    console.log(state)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
