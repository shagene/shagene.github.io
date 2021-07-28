import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-appbar-button',
  templateUrl: './appbar-button.component.html',
  styleUrls: ['./appbar-button.component.scss']
})
export class AppbarButtonComponent implements OnInit {

  companies: any;
  @Input('company') companyName = '';
  @Input('logo') companyLogo = '';
  @Input('alt') companyAlt = '';
  constructor() { }

  ngOnInit(): void {
  }


}
