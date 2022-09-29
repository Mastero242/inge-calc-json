import { EnumTYC, PropertyCode } from '../common/enums';
import { getSettingValue } from '../common/functions';

/**
 * e_ds2
 * Value ex: 0.12
 * Onglet: PARAM
 * @param TYC Type de ciment
 * @returns e_ds2; ex: 0.12
 */
export default async function EDS2(TYC: EnumTYC): Promise<number> {
  return await getSettingValue(TYC, PropertyCode.EDS2);
}
