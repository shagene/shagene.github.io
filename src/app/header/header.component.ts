import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from "@angular/common/http";
import {
  Observable
} from 'rxjs';
import {
  map
} from 'rxjs/operators';


interface Company {
  id: number;
  companyName: string;
  alt: string;
  companyDescription: string;
  icon: string;
  color: string;
  imageUrl: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // companies$!: Observable<Company[]>;
  companies: any;
  applications: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCompanies();
    this.getApplications();
  }

  getCompanies() {
    this.httpClient.get("assets/dummydata/companies.json").subscribe(data => {
      this.companies =  data;
    })
  }

  getApplications() {
    this.httpClient.get("assets/dummydata/applications.json").subscribe(data => {
      this.applications = data;
    })
  }
}
