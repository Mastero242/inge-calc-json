export enum EnumSTA {
  /** (1) EN 1992-1-1 Norme de base */ EN1992_1_1_BS = 'EN1992_1_1_BS',
  /** (2) EN 1992-2 Norme de base */ EN1992_2_BS = 'EN1992_2_BS',
  /** (3) NF EN 1992-1-1/NA - DEFAULT */ NF_EN_1992_1_1_NA = 'NF_EN_1992_1_1_NA',
  /** (4) NF EN 1992-2/NA */ NF_EN_1992_2_NA = 'NF_EN_1992_2_NA',
  /** (5) BS EN 1992-1-1/NA */ BS_EN_1992_1_1_NA = 'BS_EN_1992_1_1_NA',
  /** (6) RCC-CW 2018 */ RCC_CW_2018 = 'RCC_CW_2018',
  /** (7) EN 1992-3 Norme de base */ EN_1992_3_BS = 'EN_1992_3_BS',
  /** (8) NF EN 1992-3/NA */ NF_EN_1992_3_NA = 'NF_EN_1992_3_NA',
  /** (9) BS EN 1992-3/NA */ BS_EN_1992_3_NA = 'BS_EN_1992_3_NA',
}
//export type EnumSTA = keyof typeof EnumSTA;

export enum EnumCON {
  /**  (1) C12/15 */ C1215 = 'C1215',
  /**  (2) C16/20 */ C1620 = 'C1620',
  /**  (3) C20/25 */ C2025 = 'C2025',
  /**  (4) C25/30 */ C2530 = 'C2530',
  /**  (5) C28/35 */ C2835 = 'C2835',
  /**  (6) C30/37 - DEFAULT */ C3037 = 'C3037',
  /**  (7) C35/45 */ C3545 = 'C3545',
  /**  (8) C40/50 */ C4050 = 'C4050',
  /**  (9) C45/55 */ C4555 = 'C4555',
  /** (10) C50/60 */ C5060 = 'C5060',
  /** (11) C55/67 */ C5567 = 'C5567',
  /** (12) C60/75 */ C6075 = 'C6075',
  /** (13) C70/85 */ C7085 = 'C7085',
  /** (14) C80/95 */ C8095 = 'C8095',
  /** (15) C90/105 */ C9010 = 'C9010',
}
//export type EnumCON = keyof typeof EnumCON;

export enum EnumTYC {
  /** (1) N - DEFAULT */ N = 'N',
  /** (2) R */ R = 'R',
  /** (3) S */ S = 'S',
}
//export type EnumTYC = keyof typeof EnumTYC;

export enum EnumKCO {
  /** (1) Classe A */ A = 'A',
  /** (2) Classe B */ B = 'B',
  /** (3) Classe C */ C = 'C',
  /** (4) Branche supérieure horizontale - DEFAULT */ H = 'H',
}
//export type EnumKCO = keyof typeof EnumKCO;

export enum EnumUNIT {
  /** (1) t - DEFAULT */ T = 'T',
  /** (2) kN */ KN = 'KN',
  /** (3) MN */ MN = 'MN',
}
//export type EnumUNIT = keyof typeof EnumUNIT;

export enum EnumLFL {
  /** (1) Chargement de longue durée - DEFAULT */ LTL = 'LTL',
  /** (2) Chargement de courte durée */ STL = 'STL',
}
//export type EnumLFL = keyof typeof EnumLFL;

export enum EnumCDF {
  /** (1) Diagramme rectangulaire simplifié - DEFAULT */ RSD = 'RSD',
  /** (2) Diagramme parabole rectangle */ PRD = 'PRD',
}
//export type EnumCDF = keyof typeof EnumCDF;

export enum EnumAGF {
  /** (1) Quartzite */ QUARTZITE = 'QUARTZITE',
  /** (2) Calcaires - DEFAULT */ LIMESTONE = 'LIMESTONE',
  /** (3) Grès */ SANDSTONE = 'SANDSTONE',
  /** (4) Basalte */ BASALT = 'BASALT',
}
//export type EnumAGF = keyof typeof EnumAGF;

export enum EnumECF {
  /** (1) XC -  DEAFAULT */ XC = 'XC',
  /** (2) XD ˅ XS ˅ XF ˅ XA  */ XD = 'XD',
}
//export type EnumECF = keyof typeof EnumECF;

export enum EnumCBAR {
  /** (1) HA - DEFAULT */ HY = 'HY',
  /** (2) Dx */ MILD = 'MILD',
}
//export type EnumCBAR = keyof typeof EnumCBAR;

export enum Enum_D {
  /** (1) Combinaison caractéristique - DEFAULT */ CCO = 'CCO',
  /** (2) Combinaison quasi permanente */ QPC = 'QPC',
  /** (3) Combinaison fréquente */ FCO = 'FCO',
}
//export type _EnumD = keyof typeof Enum_D;

export enum EnumSFS {
  /** (1) Dalle bénéficiant d'un effet de redistribution transversale */ TRSLAB = 'TRSLAB',
  /** (2) Dalle autre */ OTSLAB = 'OTSLAB',
  /** (3) Poutre - DEFAULT */ BEAM = 'BEAM',
  /** (4) Voile */ WALLA = 'WALLA',
}
//export type EnumSFS = keyof typeof EnumSFS;

export enum EnumSREP {
  /** (1) Très lisse - DEFAULT */ VSMOOTH = 'VSMOOTH',
  /** (2) Lisse */ SMOOTH = 'SMOOTH',
  /** (3) Rugueuse */ ROUGH = 'ROUGH',
  /** (4) Avec indentation */ INDENTED = 'INDENTED',
}

export enum EnumENT {
  /** (1) Moments - DEFAULT */ MOMENTS = 'MOMENTS',
  /** (2) Charges réparties */ LOADS = 'LOADS',
}

export enum EnumSTD {
  /** (1) Poutre continu ou sur appui simple - DEFAULT */ CBEAM = 'CBEAM',
  /** (2) Console */ CANTILEVER = 'CANTILEVER',
}
