import { Component, OnInit } from '@angular/core';
import { DataSWService } from '../servicios/data-sw.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private data: DataSWService) { }
datosF: any[] = [];
filterPost = '';
show:boolean = false;
  ngOnInit() {
this.data.getFilms().subscribe(
  (data) => {
    this.datosF = data['results'];
    console.log(this.datosF);
},

);
  }
  getPress(e) {
    this.show = !this.show;
  }
}
