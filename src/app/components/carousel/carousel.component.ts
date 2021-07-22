import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    nav: true,
    loop:true,
    margin:0,
    stagePadding: 200,
    dots: true,
    navSpeed: 700,
    navText: [ "<img src='../../../assets/right_arrow.svg'>", "<img style='transform: scaleX(-1);' src='../../../assets/right_arrow.svg'>" ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      1080: {
        items: 2
      },
      1280: {
        items: 3
      }
    },

  }

    slides = [
      {id: "1", title: 'File Management', icon: 'folder', color: '#003150', img: "https://dummyimage.com/325x195/742b1a/fffeee", des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.', },
      {id: "2", title: 'Dividend', icon: 'work', color: '#c84e00', img: "https://dummyimage.com/325x195/772b2a/fffaaa", des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.', },
      {id: "3", title: 'Work Request', icon: 'assignment', color: '#93186c', img: "https://dummyimage.com/325x195/782b3a/fffbbb", des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.', },
      {id: "4", title: 'Tax Season', icon: 'account_balance', color: '#91c60f', img: "https://dummyimage.com/325x195/7a2b4a/fffxxx", des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.', },
      {id: "5", title: 'Annual Meeting', icon:'date_range', color: '#6d2244', img: "https://dummyimage.com/325x195/962b5a/fffccc", des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.', },
      {id: "6", title: 'Access Management', icon: 'contact_page', color: '#1e7040', img: "https://dummyimage.com/325x195/5j2b6a/fff111", des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.', },
    ];


  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
}
}
