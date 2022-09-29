import { Injectable } from '@angular/core';
import { PropertyCode } from './common/enums';
import * as Engine from './params';
import { Properties } from './properties';
import { DependentProperties } from './dependent-properties';

@Injectable()
export class CalculatorService {
  constructor() {}

  async calculate(properties: [PropertyCode, any][]) {
    const keys = Object.keys(DependentProperties);
    keys.forEach(async (key: PropertyCode) => {
      const args = Properties.getDependentValues(key, properties);
      properties[key] = await CalculatorService.callByName(
        key,
        Engine,
        ...args
      );
      // console.log(key);
      // console.log(properties[key]);
    });

    return properties;
  }

  /**
   * Calls a function by name gived a context
   * @param functionName the function name, using namespaces also allowed 'my.namespace.myFunction'
   * @param context function context
   * @param args function arguments
   * @returns function return or undefined if functionName is empty
   */
  static callByName(functionName: string, context: any, ...args: any) {
    const namespaces = functionName.split('.');
    const func = namespaces.pop();
    for (let i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }

    try {
      let output = func ? context[func].apply(context, args) : undefined;
      return output;
    } catch (error) {
      console.log(error);
      console.log(functionName);
      console.log(context);
      console.log(args);
      return undefined;
    }
  }
}
