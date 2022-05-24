import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

  public transform(value: string): string {
    const {length, 0: first, [length - 1]: last} = value.split(' ');
    return first.charAt(0).toString().toUpperCase() + last.charAt(0).toString().toUpperCase();
  }

}
