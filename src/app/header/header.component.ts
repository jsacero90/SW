import { Component, OnInit } from '@angular/core';
import { DisparadorService } from '../servicios/disparador.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private disparador: DisparadorService) { }

  ngOnInit() {
  }
  public llevar(index: number) {
    this.disparador.llegada(index);
  }
}
