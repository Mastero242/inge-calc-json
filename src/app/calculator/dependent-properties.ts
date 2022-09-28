import { PropertyCode } from './common/enums';

let DependentProperties = {
  [PropertyCode.C]: [PropertyCode.A, PropertyCode.B],
  [PropertyCode.D]: [PropertyCode.A, PropertyCode.B],
  [PropertyCode.E]: [PropertyCode.A, PropertyCode.B],
};

export { DependentProperties };
