//our root app component
import {Component, VERSION, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { List } from './list';

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
  name:string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }

  title = 'Nested Accordion';
  list = LIST;
  selectedList: List = new List;
  onSelect(list: List): void {
    list.hide = !list.hide;
    this.selectedList = list;
}

  ngOnInit(): void {
  }

}
