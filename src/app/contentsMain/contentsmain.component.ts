import { Component, OnInit } from '@angular/core';
import { DataSWService } from '../servicios/data-sw.service';
import { ImagenesService } from '../servicios/img-sw.service';

@Component({
  selector: 'app-contentsmain',
  templateUrl: './contentsmain.component.html',
  styleUrls: ['./contentsmain.component.scss']
})

export class ContentsMainComponent implements OnInit {
  cantidad: string;
  peoples: any[] = [];
  vehicles: any[] = [];
  nombre: string;
  nombreVehiculo: string;
  altura: string;
  peso: string;
  colorCabello: string;
  navsNombre: string;
  obj_unidos: any[] = [];

  constructor(private dataSWService: DataSWService, private imagenesService: ImagenesService) { }
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
          const people = data['results'];
          const people2 = this.imagenesService.getImagP();
          // tslint:disable-next-line: forin
          for (const i in people) {
            const item = parseInt(i);
            this.obj_unidos = Object.assign(people[i], people2[i]);
            this.peoples[item] = this.obj_unidos;
          }
          console.log(this.peoples);
        },
        (error) => {
          console.error(error);
        }
      );
    /*this.dataSWService.getvehicle(1)
      .subscribe(
        (data) => { // Success
          this.nombreVehiculo = data['name'];

          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );*/
    this.dataSWService.getvehicles()
      .subscribe(
        (data) => { // Success
          this.vehicles = data['results'];

          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
