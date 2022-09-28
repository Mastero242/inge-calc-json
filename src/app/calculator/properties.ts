import { PropertyCode } from './common/enums';
import { DependentProperties } from './dependent-properties';
import * as data from './Data/property-data.json';
import * as settingsdata from './Data/setting-data.json';
import {
  PropertyValue,
  RawPropertyValue,
  RawSetting,
  Setting,
} from './common/interface';

export class Properties {
  private static defaultPropertyValues: PropertyValue[];
  private static settings: Setting[];

  // static readonly DependentProperties = {
  //   [PropertyCode.C]: [PropertyCode.A, PropertyCode.B],
  //   [PropertyCode.D]: [PropertyCode.A, PropertyCode.B],
  //   [PropertyCode.E]: [PropertyCode.A, PropertyCode.B],
  // };

  static isDependent(propertyCode: string) {
    return propertyCode in DependentProperties;
  }

  static getDependentValues(
    property: PropertyCode,
    properties: Record<PropertyCode, any>
  ): any[] | undefined {
    if (property in properties) {
      let values = [];
      let codes = DependentProperties[property];
      codes.forEach((code) => values.push(properties[code]));
      return values;
    } else {
      return undefined;
    }
  }

  static getData(): PropertyValue[] {
    
    if (!this.defaultPropertyValues) {
      let rawValues = data.properties as unknown as RawPropertyValue[];
      this.defaultPropertyValues = this.parseRawPropertyValueToPropertyValue(
        rawValues as Array<RawPropertyValue>
      );
    }
    console.log(this.defaultPropertyValues);
    return this.defaultPropertyValues;
  }

  static getSettings(): Setting[] {
    if (!this.settings) {
      this.settings = this.parseRawSettingToSetting(settingsdata.settings);
    }
    return this.settings;
  }

  static parseRawPropertyValueToPropertyValue(
    raws: RawPropertyValue[]
  ): PropertyValue[] {
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

  static parseRawSettingToSetting(raws: RawSetting[]): Setting[] {
    return raws.map(
      (x: RawSetting) =>
        ({
          listCode: x.ListCode,
          propertyCode: x.PropertyCode,
          propertyValue: x.Value,
        } as Setting)
    );
  }
}
