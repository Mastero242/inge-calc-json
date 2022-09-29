import { ErrorLevel, PropertyCode, PropertyType } from './enums';

export interface RawPropertyValue {
  Id: number;
  IsComputed: number;
  DefaultValue: string;
  Code: string;
  Name: string;
  Unit: string;
  Settings: string;
  Type: PropertyType;
}

export interface PropertyValue {
  propertyId: number;
  propertyCode: string;
  value: any;
  settings: PropertySettings;
  type: PropertyType;
  isComputed: boolean;
}

export interface PropertySettings {
  precision?: number;
  min?: string;
  max?: string;
  bold?: boolean;
}

export interface RawSetting {
  ListCode: string;
  PropertyCode: string;
  Value: string;
}

export interface Setting {
  parentCode: string;
  listCode: string;
  propertyCode: string;
  propertyValue: string;
}

export class CalculatorError extends Error {
  constructor(
    public message: string,
    public code?: string,
    public value?: any,
    public level?: ErrorLevel,
    public messageParams?: Object
  ) {
    super(message);

    Object.setPrototypeOf(this, CalculatorError.prototype);
  }
}
