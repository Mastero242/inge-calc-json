import { EnumSTA } from '../common/enums';
// import { getAcw } from '../common/functions';

/**
 * Param: alpha._cw
 * Value ex: 1.00
 * Excel: ShearForce/EffortTranchant.I24
 * C'est le meme calcul que alpha_cw (ACWT) de Torsion,
 * avec param differents
 * @param STA
 * @param KUNIT
 * @param BFL
 * @param HFL
 * @param FCTM
 * @param NEDSF
 * @returns alpha._cw, ex. 1.00
 */
export async function ACW(
  STA: EnumSTA,
  KUNIT: number,
  BFL: number,
  HFL: number,
  FCTM: number,
  NEDSF: number
): Promise<number> {
  // let acw = await getAcw(STA, KUNIT, BFL, HFL, FCTM, NEDSF);
  // //return acw;

  if (BFL == 0 || HFL == 0) {
    throw 'b ou h ne peuvent être à 0';
    //return 1;
  }
  let ac = BFL * HFL;

  switch (STA) {
    case EnumSTA.EN1992_1_1_BS:
    case EnumSTA.EN1992_2_BS:
    case EnumSTA.EN_1992_3_BS:
    case EnumSTA.BS_EN_1992_1_1_NA:
    case EnumSTA.BS_EN_1992_3_NA:
    case EnumSTA.RCC_CW_2018:
      return 1;

    case EnumSTA.NF_EN_1992_1_1_NA:
    case EnumSTA.NF_EN_1992_2_NA:
    case EnumSTA.NF_EN_1992_3_NA:
      if (
        (NEDSF * 0.000001 * KUNIT) / ac < 0 &&
        (NEDSF * 0.000001 * KUNIT) / ac <= -FCTM
      ) {
        throw "Sigct > fctm  Erreur, ce cas n'est pas traité dans la NF EN 1992-1-1/NA ";
      }
      if ((NEDSF * 0.000001 * KUNIT) / ac < 0) {
        return 1 + (NEDSF * 0.000001 * KUNIT) / ac / FCTM;
      } else {
        return 1;
      }
  }
}
