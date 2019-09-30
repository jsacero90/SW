import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSWService {

  constructor(private http: HttpClient) { }

  getPeople(id: number) {
    return this.http.get('https://swapi.co/api/people/' + id);
  }
  getPeoples() {
    return this.http.get('https://swapi.co/api/people/');
  }
}
