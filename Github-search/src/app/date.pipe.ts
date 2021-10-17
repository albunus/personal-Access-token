import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any): Date {
    var DatePipe = new Date(value.match(/\d+/)[0] * 1);
    return DatePipe;
  }
}
