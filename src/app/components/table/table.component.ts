import { IElements } from './../../services/IElements';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import { DataService } from 'src/app/services/data.service';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  // 1st Table
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  // 2nd Table
  displayedColumns2nd: string[] = [];
  PeriodicTable: any;

  tables = [0];
  constructor(private _dataService: DataService) {
    // 1st Table
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

    // 2nd table
    // this.displayedColumns2nd.length = 8;
    // this.displayedColumns2nd.fill('filler');


    // The first two columns should be position and name; the last two columns: weight, symbol
    this.displayedColumns2nd[0] = 'atomicNumber';
    this.displayedColumns2nd[1] = 'name';
    this.displayedColumns2nd[2] = 'symbol';
    this.displayedColumns2nd[3] = 'atomic_mass';
    this.displayedColumns2nd[4] = 'discoveredBy';
    this.displayedColumns2nd[5] = 'appearance';
    this.displayedColumns2nd[6] = 'melt';
    this.displayedColumns2nd[7] = 'summary';
  }

  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

  ngOnInit(): void {
    this.getPeriodicElements();
  }

  getPeriodicElements() {
    this._dataService.getPeriodicElements().subscribe(
      (res) => {
        console.log(res);
        this.PeriodicTable = res
      },
      (err) => console.log(err)
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
  };
}


