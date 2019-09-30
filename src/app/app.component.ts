import { Component, OnInit } from '@angular/core';
import {DataSWService} from './data-sw.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'apiC';
  peoples: any[] = [];
  nombre: string;
  altura: string;

  constructor(private dataSWService: DataSWService) { }
  ngOnInit() {
    this.dataSWService.getPeople(1)
    .subscribe(
      (data) => { // Success
        this.nombre = data['name'];
        this.altura = data['height'];
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
    this.dataSWService.getPeoples()
    .subscribe(
      (data) => { // Success
        this.peoples = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

