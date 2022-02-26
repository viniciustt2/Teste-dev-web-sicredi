import { Pipe, PipeTransform } from '@angular/core';
import { IDragon } from 'src/app/core/models/dragons';

@Pipe({
  name: 'sortDragons',
})
export class SortPipe implements PipeTransform {
  transform(dragons: IDragon[], field: string): IDragon[] {
    if (!Array.isArray(dragons)) {
      return dragons;
    }
    dragons.sort((a: any, b: any) => {
      if (a[field].toUpperCase() < b[field].toUpperCase()) {
        return -1;
      } else if (a[field].toUpperCase() > b[field].toUpperCase()) {
        return 1;
      } else {
        return 0;
      }
    });

    return dragons;
  }
}
