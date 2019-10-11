import { Component, OnInit, Input, Output } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  datohijo: any;

  ngOnInit() { }

  funEviar(e) {
    //console.log(e);
    this.datohijo = e;
  }
}

