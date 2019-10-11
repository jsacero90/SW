import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  getImagF() {
    return {
      0: {
        imagen: '../../assets/images/02_films/01_a_new_hope.jpg',
        logo: '../../assets/images/episode_IV.png',
        video: `vZ734NWnAHA`
      },
      1: {
        imagen: '../../assets/images/02_films/05_attack_of_the_clones.jpg',
        logo: '../../assets/images/episode_II.png',
        video: `gYbW1F_c9eM`
      },
      2: {
        imagen: '../../assets/images/02_films/04_the_phantom_menace.jpg',
        logo: '../../assets/images/episode_I.png',
        video: `bD7bpG-zDJQ`
      },
      3: {
        imagen: '../../assets/images/02_films/06_revenge_of_the_sith.jpg',
        logo: '../../assets/images/episode_III.png',
        video: `5UnjrG_N8hU`
      },
      4: {
        imagen: '../../assets/images/02_films/03_return_of_the_jedi.jpg',
        logo: '../../assets/images/episode_VI.png',
        video: `XgB4gaY2dWE`
      },
      5: {
        imagen: '../../assets/images/02_films/02_the_empire_strikes_back.jpg',
        logo: '../../assets/images/episode_V.png',
        video: `JNwNXF9Y6kY`
      },
      6: {
        imagen: '../../assets/images/02_films/07_the_force_awakens.jpg',
        logo: '../../assets/images/',
        video: `sGbxmsDFVnE`
      },
    };
  }
}
