import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(str:any, ...args: unknown[]): unknown {
    return str.split(' ').slice(0,2).join(' ');
  }

}
