import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  appStructureCode = `<div class="wrapper">
      <app-header></app-header>
      <div class="content">
        <app-appbar></app-appbar>
        <div class="right-half">
          <div style="padding: 50px">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
      <app-footer></app-footer>
</div>`;

  opened = false;


  constructor() {}

  ngOnInit(): void {}

}
