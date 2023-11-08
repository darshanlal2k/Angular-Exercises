import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  username: string = "darshan";
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {


  }

  getSampleData(): Observable<any> {
    return this.httpClient.get<any>("http://universities.hipolabs.com/");
  }
}
