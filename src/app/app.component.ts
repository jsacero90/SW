import { Component, OnInit, Input, Output } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  datohijo: number;
  Constructor() { }

  funEviar(e)  {

    this.datohijo = e;
    console.log(this.datohijo)
  }
  ngOnInit() {

   }



}

