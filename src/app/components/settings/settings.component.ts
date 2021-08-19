//our root app component
import {Component, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { List } from './list';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

const LIST: List[] = [
    {
        title: 'Menu 1',
        hide : true,
        children: [],
    },
    {
        title: 'Menu 2',
        hide : true,
        children: [{
            title: 'Sub Menu 2',
            hide : true,
            children: [{
                title: 'Sub Sub Menu 2',
                hide : true,
                children: [{
                    title: 'Sub Sub Menu 2, Sibling 1',
                    hide : true,
                    children: []
                },
                {
                    title: 'Sub Sub Sub Menu 2, Sibling 2',
                    hide : true,
                    children: []
                }]
            }]
        }]

    },
    {
        title: 'Menu 3',
        hide : true,
        children: []
    }
];
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  items = ['dashboard', 'Badges', 'Buttons', 'Tables', 'Tooltips', 'Carousel', 'Widgets'];
  expandedIndex = 0;
  // companies: Observable<any[]>;
  companies: any;
  applications: any;
  constructor(private _dataService: DataService) {
  }

  title = 'Nested Accordion';
  list = LIST;
  selectedList: List = new List;
  onSelect(list: List): void {
    list.hide = !list.hide;
    this.selectedList = list;
}

  ngOnInit(): void {
    this.getFirestoreValue();
  }

  getFirestoreValue() {
    this.companies = this._dataService.getFirebaseCollection('companies');
    this.applications = this._dataService.getFirebaseCollection('applications');
  }
}
