import { Component, OnInit } from '@angular/core';
import {DataSWService} from './servicios/data-sw.service';


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
  peso: string;
  colorCabello: string;

  constructor(private dataSWService: DataSWService) { }
  ngOnInit() {
    this.dataSWService.getPeople(1)
    .subscribe(
      (data) => { // Success
        this.nombre = data['name'];
        this.altura = data['height'];
        this.peso = data['mass'];
        this.colorCabello = data['hair_color'];
        
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

