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
          const people = data['results'];
          const people2 = this.imagenesService.getImagP();
          // tslint:disable-next-line: forin
          for (const i in people) {
            const item = parseInt(i);
            this.obj_unidos = Object.assign(people[i], people2[i]);
            this.peoples[item] = this.obj_unidos;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    this.dataSWService.getvehicles()
      .subscribe(
        (data) => { // Success
          const vehicles = data['results'];
          const vehicles2 = this.imagenesService.getImagV();
          // tslint:disable-next-line: forin
          for (const i in vehicles) {
            const item = parseInt(i);
            let union;
            union = Object.assign(vehicles[i], vehicles2[i]);
            this.vehicles[item] = union;
          }

        },
        (error) => {
          console.error(error);
        }
      );
  }
}
