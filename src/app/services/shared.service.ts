import { Injectable, EventEmitter, OnDestroy  } from '@angular/core';
import { BehaviorSubject, Observable, of, Observer, throwError, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharedService  implements OnDestroy{
  private expandAppbar = new Subject<boolean>();
  expandAppbarObserveable = this.expandAppbar.asObservable();

  constructor() {}

  toggleExpanded(value: boolean) {
    this.expandAppbar.next(value);
  }

  ngOnDestroy(): void {
    this.expandAppbar.complete();
  }

}
