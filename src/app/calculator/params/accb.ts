import { PropertyCode } from '../common/enums';
import { getSettingValue } from '../common/function';

export async function ACCB(ACC: number): Promise<number> {
  // console.log('function inside');
  // var ttt = await getSettingValue('C1215', PropertyCode.FCM);
  // console.log(ttt);

  return 2 * ACC;
}
