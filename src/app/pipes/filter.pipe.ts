import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any , arg: any): any {
    const resultado = [];
    for (const post of value) {
      if (post.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultado.push(post);
      }
    }
    return resultado;
  }
}
