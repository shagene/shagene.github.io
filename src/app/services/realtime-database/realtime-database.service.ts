import { ICompany } from './../ICompany';
import {
  BehaviorSubject,
  Observable, Subject
} from 'rxjs';
import {
  Injectable
} from "@angular/core";
import {
  AngularFireAction,
  AngularFireDatabase,
  snapshotChanges
} from "@angular/fire/database";
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealtimeDatabaseService {
  constructor(private realtimeDb: AngularFireDatabase) {

  }

  getCompanies(): Observable < any > {
    return this.realtimeDb.list('companies/').valueChanges();
  }

}
