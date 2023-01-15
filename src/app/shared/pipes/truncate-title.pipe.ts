import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateTitle',
})
export class TruncateTitlePipe implements PipeTransform {
  transform(value: string, limit: number): any {
    if (value.length <= limit) {
      return value;
    }
    return value.slice(0, limit) + '...';
  }
}
