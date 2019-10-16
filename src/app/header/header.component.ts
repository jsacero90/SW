import { Component, OnInit } from '@angular/core';
import { DataSWService } from '../servicios/data-sw.service';
import { ImagenesService } from '../servicios/img-sw.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private data: DataSWService,
              private data2: ImagenesService) { }
  datosF: any[] = [];
  filterPost = '';
  show = false;
  ngOnInit() {

    this.data.getFilms().subscribe(
      (data) => {
        const data1 = data['results'];
        const data2 = this.data2.getImagF();
        // tslint:disable-next-line: forin
        for (const i in data1) {
          // tslint:disable-next-line: radix
          const item = parseInt(i);
          const obj_unidos = Object.assign(data1[i], data2[i]);
          this.datosF[item] = obj_unidos;

        }

      },
      (error) => {
        console.error(error);
      }
    );
  }
  getPress(e) {
    this.show = !this.show;
  }
}
