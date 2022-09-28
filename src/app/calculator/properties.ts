import { PropertyCode } from './common/enums';
import { Property, PropertyType } from './property';
import * as data from './Data/property-data.json';

export class Properties {
  private static defaultPropertyValues: PropertyValue[];

  static readonly DependentProperties = {
    [PropertyCode.C]: [PropertyCode.A, PropertyCode.B],
    [PropertyCode.D]: [PropertyCode.A, PropertyCode.B],
    [PropertyCode.E]: [PropertyCode.A, PropertyCode.B],
  };

  static isDependent(propertyCode: string) {
    return propertyCode in Properties.DependentProperties;
  }

  static getDependentValues(
    property: PropertyCode,
    properties: Record<PropertyCode, any>
  ): any[] | undefined {
    if (property in properties) {
      let values = [];
      let codes = Properties.DependentProperties[property];
      codes.forEach((code) => values.push(properties[code]));
      return values;
    } else {
      return undefined;
    }
  }

  static getData(): PropertyValue[] {
    console.log(data[10].DefaultValue);

    if (!this.defaultPropertyValues) {
      let rawValues = data as unknown as RawPropertyValue[];
      console.log(rawValues);
      this.defaultPropertyValues = this.parseRawPropertyValueToPropertyValue(
        rawValues as Array<RawPropertyValue>
      );
    }
    return this.defaultPropertyValues;
  }

  static parseRawPropertyValueToPropertyValue(
    raws: RawPropertyValue[]
  ): PropertyValue[] {
    console.log(raws);
    return raws.map(
      (x: RawPropertyValue) =>
        ({
          propertyCode: x.Code,
          value: x.DefaultValue, //this.getValue(x.DefaultValue, x.Type),
          type: x.Type,
          settings: JSON.parse(x.Settings, (key, value) => {
            if (value && typeof value === 'object')
              for (var k in value) {
                if (/^[A-Z]/.test(k) && Object.hasOwnProperty.call(value, k)) {
                  value[k.charAt(0).toLowerCase() + k.substring(1)] = value[k];
                  delete value[k];
                }
              }
            return value;
          }),
        } as unknown as PropertyValue)
    );
  }
}

export interface RawPropertyValue {
  Id: number;
  IsComputed: number;
  DefaultValue: string;
  Created: string;
  Updated: string;
  CreatedById: string;
  UpdatedById: string;
  Code: string;
  Name: string;
  Unit: string;
  Settings: string;
  Type: PropertyType;
}

export interface PropertyValue {
  propertyId: number;
  propertyCode: string;
  settings: PropertySettings;
  value: any;
}

export interface PropertySettings {
  precision?: number;
  min?: string;
  max?: string;
  bold?: boolean;
}
