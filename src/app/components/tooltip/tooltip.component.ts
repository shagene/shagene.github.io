import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  tooltipWithPosition = `
  <button mat-raised-button color=primary
    matTooltip="Info about the action"
    [matTooltipPosition]="position.value"
    aria-label="Button that displays a tooltip in various positions">
    Action
  </button>`;

  tooltipWithDelay = `
  <button mat-raised-button color=accent matTooltip="Info about the action"
  [matTooltipShowDelay]="showDelay.value"
  [matTooltipHideDelay]="hideDelay.value"
  aria-label="Button that displays a tooltip with a customized delay in showing and hiding">
  Action
  </button>`;
  constructor() { }

  ngOnInit(): void {
  }

}
