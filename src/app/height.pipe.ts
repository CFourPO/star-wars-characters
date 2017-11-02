import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let str = '', conversion = args ? args[0] : 'ft';

    switch(conversion) {
      case 'in':
        value *= .39;
        str = value + 'in.';
        break;
      case 'ft':
        value *= .39;
        str += `${Math.floor(value/12)}' `;
        str += value%12 > 0 ? `${Math.round(value % 12)}"` : '';
        break;
      case 'cm':
      default:
        str = `${value} cm`;
        break;
    }
    return str;
  }

}
