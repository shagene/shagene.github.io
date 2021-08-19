import {
  IElements
} from './IElements';
import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  throwError
} from 'rxjs';
import {
  catchError,
  map,
  tap
} from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import {
  ICompany
} from './ICompany';
import {
  IApplication
} from './IApplication';

import {
  AngularFirestore
} from '@angular/fire/firestore';
import {
  AngularFireDatabase,
  AngularFireObject
} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  // companiesUrl = 'http://localhost:3000/companies';
  // applicationsUrl = 'http://localhost:3000/applications';
  // periodicElementsURL = 'http://localhost:3000/elements';

  baseUrl = 'https://my-json-server.typicode.com/shagene/shagene.github.io/';

  // companiesRef: AngularFirestoreCollectionGroup<ICompany>;
  companiesRef: any;
  applicationsRef: any;

  companyref: AngularFireObject < any > ;
  company: Observable < any > ;

  constructor(private httpClient: HttpClient, private _firestore: AngularFirestore, private _firedatabase: AngularFireDatabase) {
    // this.companiesRef = firestore.collection(this.companiesPath);
    // this.applicationsRef = firestore.collection(this.applicationsRef);
    this.companyref = _firedatabase.object('companies');
    this.company = this.companyref.valueChanges();
  }

  getFirebaseCollection(collection: string) {
    return this._firestore.collection(collection).valueChanges();
  }

  getAllCompanies() {
    // this._firedatabase.database.ref().child('companies').on('value', snap => console.log(snap.val()));
    // this._firedatabase.object('companies').valueChanges().subscribe(data => console.log(data));
    return this.company;
  }

  getCurrentCompany(id: number) {
    // this._firestore.collection('companies').valueChanges().subscribe(data => console.log(data));

    let collection = this._firestore.collection('companies');
    // collection.get().subscribe(data => console.log(data));
    if (id == 1) {
      return this._firestore.doc(`companies/companyA`).valueChanges();
    } else if (id == 2) {
      return this._firestore.doc(`companies/companyB`).valueChanges();
    } else if (id == 3) {
      return this._firestore.doc(`companies/companyC`).valueChanges();
    } else if (id == 4) {
      return this._firestore.doc(`companies/companyD`).valueChanges();
    } else return this._firestore.doc(`companies/companyC`).valueChanges();

  }

  getFirebaseCollectionDocument() {
    return this._firestore.collection('companies').doc('companyA').valueChanges();
  }

  getCompanies(): Observable < ICompany[] > {
    return this.httpClient.get < ICompany[] > (this.baseUrl + 'companies').pipe(catchError(this.handleError));
  }

  getCompany(companyId: number): Observable < ICompany[] > {
    return this.httpClient.get < ICompany[] > (this.baseUrl + 'companies/' + companyId).pipe(catchError(this.handleError));
  }

  getApplications(): Observable < IApplication[] > {
    return this.httpClient.get < IApplication[] > (this.baseUrl + 'applications').pipe(catchError(this.handleError));
  }

  getPeriodicElements(): Observable < IElements[] > {
    return this.httpClient.get < IElements[] > (this.baseUrl + 'elements').pipe(catchError(this.handleError));
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
