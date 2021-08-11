import {
  Component,
  OnInit
} from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],

})
export class AppbarComponent implements OnInit {
  expandedAppbar: boolean = true;
  dashboardHover: boolean = false;
  badgesHover: boolean = false;
  buttonsHover: boolean = false;
  tootlTipsHover: boolean = false;
  tablesHover: boolean = false;
  carouselWidgets: boolean = false;
  widgetsHover: boolean = false;
  settingsHover: boolean = false;

  constructor(private appbarExpand: SharedService) {
  }

  ngOnInit(): void {
    this.appbarExpand.expandAppbarObserveable.subscribe((data) => {
      this.expandedAppbar = data;
    });
  }

}
