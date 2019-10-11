import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() indexF = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  llevar(index: number) {
    this.indexF.emit(index);
  }
}
