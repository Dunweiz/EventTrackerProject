import { Injectable } from '@angular/core';
import { Travel } from './models/travel';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravelTrackerService {
  private baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/travel/';

  constructor(
    private http: HttpClient
  ) { }

  ListTravels() {
    return this.http.get<Travel[]>(this.url).pipe(
    catchError((err: any) => {
        console.log(err);
        return throwError(
          'TravelTrackerService.Listtravels: error retrieving Travel List'
        );
      })
    );
  }

  getOneTravel(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest'
    })
  };
    return this.http.get<Travel>(this.url + id, httpOptions)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          'TravelTrackerService.getOneTravel: error retrieving Travel '
        );
      })
    );
  }

  destroy(id: number) {
    const httpOptions = {
        headers: new HttpHeaders({
          'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.delete<Travel>(this.url + id, httpOptions)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          'TravelTrackerService.destroy: error deleting a Travel'
        );
      })
    );
  }

  updateTravel(id: number, travel: Travel) {
    const httpOptions = {
        headers: new HttpHeaders({
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type':  'application/json'
      })
    };
    return this.http.put<Travel>(this.url + id, travel, httpOptions)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          'TravelTrackerService.updateTravel: error updating a Travel'
        );
      })
    );
  }

  create(travel: Travel) {
    const httpOptions = {
        headers: new HttpHeaders({
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type':  'application/json'
      })
    };
    return this.http.post<Travel>(this.url, travel, httpOptions)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          'TravelTrackerService.create: Error creating Travel'
        );
      })
    );
  }
}
