import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { getSupportedInputTypes } from '@angular/cdk/platform';

@Injectable({providedIn: 'root'})
export class DataService {

  private companySource = new BehaviorSubject(['Disney', 'Apple']);
  companiesMessage = this.companySource.asObservable();
  constructor(private httpClient: HttpClient) { }


  // getSuppliers() {
  //   this.httpClient.get("assets/dummydata/companies.json").subscribe(data => {
  //     // console.log(data);
  //   })
  // }

  // getEvents(): Observable<Event[]> {
  //   return this.http.get('url')
  //     .map(res => res.json())
  // }
}
