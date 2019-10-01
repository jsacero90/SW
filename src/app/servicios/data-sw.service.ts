import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSWService {

  constructor(private http: HttpClient) { }
//Peoples
  getPeoples() {
    return this.http.get('https://swapi.co/api/people/');
  }

  getPeople(id: number) {
    return this.http.get('https://swapi.co/api/people/' + id);
  }

//Films
  getFilms() {
    return this.http.get('https://swapi.co/api/films/');
  }

  getFilm(id: number) {
    return this.http.get('https://swapi.co/api/films/' + id);
  }

//vehicles
  getvehicles(){
    return this.http.get('https://swapi.co/api/vehicles/');
  }

  getvehicle(id: number){
    return this.http.get('https://swapi.co/api/vehicles/' + id);
  }

}
