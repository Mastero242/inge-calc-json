import { Properties } from '../properties';
import { parseNumber } from '@progress/kendo-angular-intl';
import { PropertyCode } from './enums';
import { Setting } from './interface';

/**
 * Returns an API call 'prop/{settingCode}/{propertyCode}'
 */
export async function getSettingValue(
  settingCode: string,
  property: PropertyCode
): Promise<number> {
  // const httpClient = new HttpClient(new HttpXhrBackend({
  // build: () => new XMLHttpRequest()
  // }));
  let settings: Setting[] = [];
  let propertyCode = PropertyCode[property];

  // const settingsService = AppService.getInjector().get(SettingsService);
  settings = await Properties.getSettings();

  let value: string = '';
  var setting = settings.find(
    (x) => x.listCode == settingCode && x.propertyCode == propertyCode
  );

  if (setting) value = setting.propertyValue;
  // else
  // value = await lastValueFrom(httpClient.get<string>(`/api/settings/prop/${settingCode}/${propertyCode}`));

  return parseNumber(value);
}
