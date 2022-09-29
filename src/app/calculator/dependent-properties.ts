import { PropertyCode } from './common/enums';

let DependentProperties = {
  [PropertyCode.ABCO]: [
    PropertyCode.FED,
    PropertyCode.HED,
    PropertyCode.KUNIT,
    PropertyCode.BCO,
    PropertyCode.SRDM,
    PropertyCode.ACCO,
    PropertyCode.Z0CO,
    PropertyCode.GTC,
  ],
  [PropertyCode.ACC]: [PropertyCode.STA],
  [PropertyCode.ACCB]: [PropertyCode.STA, PropertyCode.LFL],
  [PropertyCode.ACT]: [PropertyCode.STA],
};

export { DependentProperties };
