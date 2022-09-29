import { Properties } from '../properties';
import { parseNumber } from '@progress/kendo-angular-intl';
import { ErrorLevel, PropertyCode } from './enums';
import { CalculatorError, Setting } from './interface';

export * from './functions-specific';

/**
 * Returns an simulate API call 'prop/{settingCode}/{propertyCode}'
 */
export async function getSettingValue(
  settingCode: string,
  property: PropertyCode
): Promise<number> {
  let settings: Setting[] = [];
  let propertyCode = PropertyCode[property];

  // const settingsService = AppService.getInjector().get(SettingsService);
  settings = await Properties.getSettings();

  let value: string = '';
  var setting = settings.find(
    (x) => x.listCode == settingCode && x.propertyCode == propertyCode
  );

  if (setting) value = setting.propertyValue;

  return parseNumber(value);
}

/**
 * Throws a CalculatorError
 * @param message message ready for translation under 'message.<texthere>'
 * @param propertyCode
 * @param params message parameters to be remplaced in the message text
 * @param fallbackValue fallback value for the specified parameter if an error occurs and it can't be calculated
 * @param errorLevel
 */
export function throwCalculatorError(
  message: string,
  propertyCode: string,
  params?: Object,
  fallbackValue?: any,
  errorLevel?: ErrorLevel
): void {
  throw new CalculatorError(
    message,
    propertyCode,
    fallbackValue,
    errorLevel,
    params
  );
}
