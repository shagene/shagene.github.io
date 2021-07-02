import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  textWithBadge = `
  <span matBadge="4"
   matBadgeOverlap="false">Text with a badge</span>`;
  textWithLargeBadge = `
   <span matBadge="1" matBadgeSize="large"
   style="padding-right: 5px;">Text with large badge</span>`;
  btnBadgeLeft = `
   <span style="padding-right: 5px;">Button with a badge on the left</span>
   <button mat-raised-button color="primary" matBadge="8"
    matBadgePosition="before" matBadgeColor="accent">`;
  btnToggleBadge = `
    <span style="padding-right: 5px;">Button toggles badge visibility</span>
    <button mat-raised-button matBadge="7"
    [matBadgeHidden]="hidden" (click)="toggleBadgeVisibility()">
    Hide</button>`;
    iconBadge = `
    <span>Icon with a badge</span>
    <mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>
    <!-- Include text description of the icon's meaning for screen-readers -->
    <span class="cdk-visually-hidden">
    Example with a home icon with overlaid badge showing the number 15
    </span>`

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor() {}

  ngOnInit(): void {}

}
