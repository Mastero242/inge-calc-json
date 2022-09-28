import { Pipe, PipeTransform } from '@angular/core';
import { Properties } from './calculator/properties';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: boolean): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter((item) => this.isDependent(item.key));
  }

  public isDependent(propertyCode: string) {
    return Properties.isComputed(propertyCode);
  }
}
