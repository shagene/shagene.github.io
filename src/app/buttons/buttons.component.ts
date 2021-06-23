import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  matRaisedBtnPrime = `<button color=primary mat-button mat-raised-button>Save</button>`;
  matRaisedBtnAccent = `<button color=accent mat-button mat-raised-button>Save</button>`;
  matRaisedBtnWarn = `<button color=warn mat-button mat-raised-button>Save</button>`;
  matRaisedBtnDisabled = `<button disabled mat-button mat-raised-button>Save</button>`;

  matFlatBtnPrime = `<button color=primary mat-button mat-flat-button>Save</button>`;
  matFlatBtnAccent = `<button color=accent mat-button mat-flat-button>Save</button>`;
  matFlatBtnWarn = `<button color=warn mat-button mat-flat-button>Save</button>`;
  matFlatBtnDisabled = `<button disabled mat-button mat-flat-button>Save</button>`;

  matStrokedBtnPrime = `<button color=primary mat-button mat-stroked-button>Save</button>`;
  matStrokedBtnAccent = `<button color=accent mat-button mat-stroked-button>Save</button>`;
  matStrokedBtnWarn = `<button color=warn mat-button mat-stroked-button>Save</button>`;
  matStrokedBtnDisabled = `<button mat-button mat-stroked-button disabled>Disabled</button>`;

  matIconBtnMore = `<button  mat-icon-button><mat-icon color=primary>more_vert</mat-icon></button>`;
  matIconBtnHome = `<button mat-icon-button color="primary"><mat-icon color=primary>home</mat-icon></button>`;
  matIconBtnMenu = `<button mat-icon-button color="accent"><mat-icon color=accent>menu</mat-icon></button>`;
  matIconBtnFavorite = `<button mat-icon-button color="warn"><mat-icon color=warn>favorite</mat-icon></button>`;
  matIconBtnOpenInNewDisabled = `<button mat-icon-button disabled><mat-icon color=primary>open_in_new</mat-icon></button>`;

  matFabIconDelete = `<button mat-fab color=primary><mat-icon>delete</mat-icon></button>`;
  matFabIconBookmark = `<button mat-fab color=primary><mat-icon>bookmark</mat-icon></button>`;
  matFabIconHome = `<button mat-fab color=accent><mat-icon>home</mat-icon></button>`;

  matMiniFabIconMenu = `<button mat-mini-fab color="primary"><mat-icon>menu</mat-icon></button>`;
  matMiniFabIconPlusOne = `<button mat-mini-fab color=accent><mat-icon>plus_one</mat-icon></button>`;
  constructor() { }

  ngOnInit(): void {
  }

}
