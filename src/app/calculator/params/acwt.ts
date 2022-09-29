import { EnumSTA } from '../common/enums';
import { ACW } from './acw';

/**
 * Param: alpha._cw
 * Value ex: 1.00
 * Onglet: Torsion
 * Champ: H11
 * C'est le meme calcul que alpha_cw (ACW)
 * de l'EffortTranchant avec param differents
 * @param STA
 * @param KUNIT
 * @param BFL
 * @param HFL
 * @param FCTM
 * @param NEDT
 * @returns alpha._cw, ex. 1.00
 */
export async function ACWT(
  STA: EnumSTA,
  KUNIT: number,
  BFL: number,
  HFL: number,
  FCTM: number,
  NEDT: number
): Promise<number> {
  // let acwt = await getAcw(STA, KUNIT, BFL, HFL, FCTM, NEDT);
  // return acwt;

  let acwt = ACW(STA, KUNIT, BFL, HFL, FCTM, NEDT);
  return acwt;
}
