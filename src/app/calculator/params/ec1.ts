import { EnumCON, PropertyCode } from '../common/enums';
import { getSettingValue } from '../common/functions';

/**
 * e_c1 (‰)
 * Value ex: 2.2
 * Onglet: PARAM
 * @param CON concrete type / type de béton
 * @returns e_c1 (‰); ex: 2.2
 */
export default async function EC1(CON: EnumCON): Promise<number> {
  return await getSettingValue(CON, PropertyCode.EC1);
}
