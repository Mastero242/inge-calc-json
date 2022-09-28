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
