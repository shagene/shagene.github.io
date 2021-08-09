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

  constructor(private appbarExpand: SharedService) {
  }

  ngOnInit(): void {
    this.appbarExpand.expandAppbarObserveable.subscribe((data) => {
      this.expandedAppbar = data;
    });
  }

}
