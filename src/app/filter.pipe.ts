import { Pipe, PipeTransform } from '@angular/core';
import { Properties } from './calculator/properties';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: boolean): any {
    if (filter) return items.filter((item) => this.isDependent(item.key));
    else return items.filter((item) => !this.isDependent(item.key));
  }

  public isDependent(propertyCode: string) {
    // console.log(propertyCode);
    return Properties.isComputed(propertyCode);
  }
}
