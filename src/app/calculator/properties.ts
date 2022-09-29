import {
  EnumSTA,
  EnumCON,
  EnumAGF,
  PropertyCode,
  EnumKCO,
  EnumTYC,
  EnumUNIT,
  EnumLFL,
  EnumECF,
  EnumCBAR,
  EnumCDF,
  Enum_D,
  EnumSFS,
  EnumSREP,
  EnumENT,
  EnumSTD,
} from './common/enums';
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

  static isDependent(propertyCode: string) {
    return propertyCode in DependentProperties;
  }

  static isComputed(propertyCode: string) {
    return this.defaultPropertyValues.find(
      (x) => x.propertyCode === propertyCode
    ).isComputed;
  }

  static getType(propertyCode: string) {
    return this.defaultPropertyValues.find(
      (x) => x.propertyCode === propertyCode
    ).type;
  }

  static getDependentValues(
    property: PropertyCode,
    properties: [PropertyCode, any][]
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

  static getListValues(propertyCode): any[] {
    // need more generic / data in json ?

    switch (propertyCode) {
      case PropertyCode.STA:
        return Object.keys(EnumSTA);
      case PropertyCode.CON:
        return Object.keys(EnumCON);
      case PropertyCode.TYC:
        return Object.keys(EnumTYC);
      case PropertyCode.KCO:
        return Object.keys(EnumKCO);
      case PropertyCode.UNIT:
        return Object.keys(EnumUNIT);
      case PropertyCode.LFL:
        return Object.keys(EnumLFL);
      case PropertyCode.CDF:
        return Object.keys(EnumCDF);
      case PropertyCode.AGF:
        return Object.keys(EnumAGF);
      case PropertyCode.ECF:
        return Object.keys(EnumECF);
      case PropertyCode.CBAR:
        return Object.keys(EnumCBAR);
      case PropertyCode.SFS:
        return Object.keys(EnumSFS);
      case PropertyCode.SREP:
        return Object.keys(EnumSREP);
      case PropertyCode.ENT:
        return Object.keys(EnumENT);
      case PropertyCode.STD:
        return Object.keys(EnumSTD);

      // case PropertyCode.D:
      //   return Object.keys(Enum_D);
    }
  }

  static getData(propertyCode): PropertyValue[] {
    if (!this.defaultPropertyValues) {
      let rawValues = data.properties as unknown as RawPropertyValue[];
      this.defaultPropertyValues = this.parseRawPropertyValueToPropertyValue(
        rawValues as Array<RawPropertyValue>
      );
    }
    if (propertyCode != '') {
      return this.filterProperties(propertyCode);
    } else {
      //All
      return this.defaultPropertyValues;
    }
    return this.defaultPropertyValues;
  }

  static getSettings(): Setting[] {
    if (!this.settings) {
      this.settings = this.parseRawSettingToSetting(settingsdata.settings);
    }
    return this.settings;
  }

  private static parseRawPropertyValueToPropertyValue(
    raws: RawPropertyValue[]
  ): PropertyValue[] {
    return raws.map(
      (x: RawPropertyValue) =>
        ({
          propertyId: x.Id,
          isComputed: !!x.IsComputed,
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

  private static parseRawSettingToSetting(raws: RawSetting[]): Setting[] {
    return raws.map(
      (x: RawSetting) =>
        ({
          listCode: x.ListCode,
          propertyCode: x.PropertyCode,
          propertyValue: x.Value,
        } as Setting)
    );
  }

  private static filterProperties(propertyCode): PropertyValue[] {
    console.log('filter prop');
    console.log(propertyCode);

    let values = [];
    values.push(
      this.defaultPropertyValues.find((pr) => pr.propertyCode === propertyCode)
    );

    let deps = DependentProperties[propertyCode];

    console.log(deps);

    deps.forEach((code) =>
      values.push(
        this.defaultPropertyValues.find((pr) => pr.propertyCode === code)
      )
    );
    console.log(values);
    return values;
  }
}
