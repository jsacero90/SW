import { Component, OnInit, Input } from '@angular/core';
import { ImagenesService } from '../servicios/img-sw.service';
import { DataSWService } from '../servicios/data-sw.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-body-films',
  templateUrl: './body-films.component.html',
  styleUrls: ['./body-films.component.scss']
})
export class BodyFilmsComponent implements OnInit {

  constructor(private imagenesService: ImagenesService,
              private dataSWService: DataSWService,
              private sanitizer: DomSanitizer,
              private rutaActiva: ActivatedRoute) { }
  // tslint:disable-next-line: variable-name
  obj_unidos: object;
  filmes: any[] = [];
  film = new Object();
  idF;
  id;

  ngOnInit() {
    this.idF = this.rutaActiva.params.subscribe(params => {
      this.id = + params['index'];

    });

    this.dataSWService.getFilms()
      .subscribe(
        (data) => { // Success
          // tslint:disable-next-line: no-string-literal
          const films = data['results'];
          const films2 = this.imagenesService.getImagF();
          // tslint:disable-next-line: forin
          for (const i in films) {
            // tslint:disable-next-line: radix
            const item = parseInt(i);
            this.obj_unidos = Object.assign(films[i], films2[i]);
            this.filmes[item] = this.obj_unidos;

          }
        },
        (error) => {
          console.error(error);
        }
      );
  }
  getCarga(p) {
    const id = parseInt(this.id) - 1;
    this.film = this.filmes[id];
  }
  getVideoUrl(item) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item);
  }
}
