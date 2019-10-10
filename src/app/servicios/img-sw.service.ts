import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  getImagF() {
    return {
      0: {
        imagen: '../../assets/images/episode_IV.png',
      },
      1: {
        imagen: '../../assets/images/episode_II.png',

      },
      2: {
        imagen: '../../assets/images/episode_I.png',

      },
      3: {
        imagen: '../../assets/images/episode_III.png',

      },
      4: {
        imagen: '../../assets/images/episode_VI.png',

      },
      5: {
        imagen: '../../assets/images/episode_V.png',

      },
      6: {
        imagen: '../../assets/images/episode_VII.png',
        video: 'prueba',
      },
    };
  }
}
