import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(value: number): string {
    let result: string = '';
    switch(value) {
      case 1:
        result = 'High';
        break;
      case 2:
        result = 'Medium';
        break;
      case 3:
        result = 'Low';
        break;
    }
    return result
  }

}
