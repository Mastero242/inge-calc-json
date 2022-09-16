import { PropertyCode } from './common/enums';
import { Property, PropertyType } from './property';
import * as data from './Data/property-data.json';

export class Properties {
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

  static getData(property: PropertyCode): any | undefined {
    let rawValues = data as unknown as RawPropertyValue[];
    console.log(rawValues);
    rawValues.map(
      (x: any) =>
        ({
          propertyCode: x.Code,
          // value: this.getValue(x.DefaultValue, x.Type),
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
        } as unknown as Property)
    );
    console.log(rawValues);
  }

  A = 3;
  B = 2;
  C = 0;
  D = 0;
  E = 0;

  // A = new Property({
  //   code: PropertyCode.A,
  //   dependentProperties: [],
  //   defaultValue: 5,
  //   type: PropertyType.Decimal,
  //   isComputed: false,
  // });

  // B = new Property({
  //   code: PropertyCode.B,
  //   dependentProperties: [],
  //   defaultValue: 2,
  //   type: PropertyType.Decimal,
  //   isComputed: false,
  // });

  // F = new Property({
  //   code: PropertyCode.F,
  //   dependentProperties: [PropertyCode.A, PropertyCode.B],
  //   defaultValue: 0,
  //   type: PropertyType.Decimal,
  //   isComputed: true,
  // });
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

