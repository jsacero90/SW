import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisparadorService {
  idFim = 0;
  constructor() { }

  public llegada(id: number) {
    this.idFim = id;
  }
}

