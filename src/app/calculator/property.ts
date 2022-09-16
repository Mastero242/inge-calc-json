import { PropertyCode } from './common/enums';

export class Property {
  code: PropertyCode;
  dependentProperties: PropertyCode[];
  type: PropertyType;
  name: string;
  isComputed: boolean;

  defaultValue: any;
  unit: string;
  settings?: PropertySettings;

  value: any;

  calculateMethod: any;

  public constructor(init?: Partial<Property>) {
    Object.assign(this, init);
    if (this.value === undefined) this.value = this.defaultValue;
  }

  public getDependentValues(
    properties: Record<PropertyCode, any>
  ): any[] | undefined {
    if (this.code in properties) {
      let values = [];
      this.dependentProperties.forEach((code) =>
        values.push(properties[code].value)
      );
      return values;
    } else {
      return undefined;
    }
  }
}

export interface PropertySettings {
  precision?: number;
  min?: string;
  max?: string;
  bold?: boolean;
}

export enum PropertyType {
  String = 'String',
  Boolean = 'Boolean',
  Integer = 'Integer',
  Decimal = 'Decimal',
  List = 'List',
}
