import { PropertyCode } from './common/enums';

import { PropertyCode } from './common/enums';

let DependentProperties = {
  [PropertyCode.C]: [PropertyCode.A, PropertyCode.B],
  [PropertyCode.D]: [PropertyCode.A, PropertyCode.B],
  [PropertyCode.E]: [PropertyCode.A, PropertyCode.B],
};

export { DependentProperties };

export interface PropertySettings {
  precision?: number;
  min?: string;
  max?: string;
  bold?: boolean;
}


