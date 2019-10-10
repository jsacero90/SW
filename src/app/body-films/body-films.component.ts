import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../servicios/img-sw.service';
import { DataSWService } from '../servicios/data-sw.service';

@Component({
  selector: 'app-body-films',
  templateUrl: './body-films.component.html',
  styleUrls: ['./body-films.component.scss']
})
export class BodyFilmsComponent implements OnInit {

  constructor(private imagenesService: ImagenesService, private dataSWService: DataSWService) { }
  obj_unidos: object;
  filmes: any[] = [];

  ngOnInit() {

    this.dataSWService.getFilms()
      .subscribe(
        (data) => { // Success
          const films = data['results'];
          const films2 = this.imagenesService.getImagF();
          // tslint:disable-next-line: forin
          for (const i in films) {
            const item = parseInt(i);
            this.obj_unidos = Object.assign(films[i], films2[i]);
            this.filmes[item] = this.obj_unidos;
          }

          console.log(this.filmes);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
