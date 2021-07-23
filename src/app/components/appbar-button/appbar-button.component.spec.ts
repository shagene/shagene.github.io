import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbarButtonComponent } from './appbar-button.component';

describe('AppbarButtonComponent', () => {
  let component: AppbarButtonComponent;
  let fixture: ComponentFixture<AppbarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppbarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
