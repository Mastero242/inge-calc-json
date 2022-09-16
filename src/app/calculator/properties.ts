import { PropertyCode } from './common/enums';
import { Property, PropertyType } from './property';

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
