import { PropertyCode } from './common/enums';

let DependentProperties = {
  // [PropertyCode.AEC]: [PropertyCode.ECEFF],
  [PropertyCode.ACCB]: [PropertyCode.STA, PropertyCode.LFL],
};

export { DependentProperties };
