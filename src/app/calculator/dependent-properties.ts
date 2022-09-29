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
  [PropertyCode.ACW]: [
    PropertyCode.STA,
    PropertyCode.KUNIT,
    PropertyCode.BFL,
    PropertyCode.HFL,
    PropertyCode.FCTM,
    PropertyCode.NEDSF,
  ],
  [PropertyCode.ACWT]: [
    PropertyCode.STA,
    PropertyCode.KUNIT,
    PropertyCode.BFL,
    PropertyCode.HFL,
    PropertyCode.FCTM,
    PropertyCode.NEDT,
  ],

  [PropertyCode.KUNIT]: [PropertyCode.UNIT],
  [PropertyCode.SRDM]: [
    PropertyCode.ACC,
    PropertyCode.FCK,
    PropertyCode.GACF,
    PropertyCode.K1S654,
    PropertyCode.N622,
  ],
  [PropertyCode.Z0CO]: [
    PropertyCode.FED,
    PropertyCode.HED,
    PropertyCode.HCC,
    PropertyCode.KUNIT,
    PropertyCode.ACCO,
    PropertyCode.GTC,
    PropertyCode.BCO,
    PropertyCode.SRDM,
  ],
};

export { DependentProperties };
