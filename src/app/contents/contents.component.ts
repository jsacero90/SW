import { Component, OnInit } from '@angular/core';
import {DataSWService} from '../servicios/data-sw.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})

export class ContentsComponent implements OnInit {
  cantidad: string;
  peoples: any[] = [];
  nombre: string;
  altura: string;
  peso: string;
  colorCabello: string;
  navs: any[] = [];
  navsNombre: string;

  constructor(private dataSWService: DataSWService) { }
  ngOnInit() {
    this.dataSWService.getPeoples()
    .subscribe(
      (data) => { // Success
        this.cantidad = data['count']
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
