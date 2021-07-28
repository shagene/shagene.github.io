import { IElements } from './IElements';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {ICompany} from './ICompany';
import { IApplication } from './IApplication';

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  companiesUrl = 'http://localhost:3000/companies';
  applicationsUrl = 'http://localhost:3000/applications';
  periodicElementsURL = 'http://localhost:3000/elements';

  getCompanies(): Observable<ICompany[]> {
    return this.httpClient.get<ICompany[]>(this.companiesUrl).pipe(catchError(this.handleError));
  }

  getApplications(): Observable<IApplication[]> {
    return this.httpClient.get<IApplication[]>(this.applicationsUrl).pipe(catchError(this.handleError));
  }

  getPeriodicElements(): Observable<IElements[]>{
    return this.httpClient.get<IElements[]>(this.periodicElementsURL).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error: ', errorResponse.error)
    } else {
      console.log('Server Side Error: ', errorResponse);
    }
    return throwError('There is currently a problem with the service.')
  }

}
