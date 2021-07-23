import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar-button',
  templateUrl: './appbar-button.component.html',
  styleUrls: ['./appbar-button.component.scss']
})
export class AppbarButtonComponent implements OnInit {

  companies = [
    {id: "1", companyName: 'The Home Depot', icon: 'folder', color: '#003150', img: "../../../assets/download.png", des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.', },
    {id: "2", companyName: 'The Walt Disney Company', icon: 'work', color: '#c84e00', img: "../../../assets/disney.png", des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.', },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
