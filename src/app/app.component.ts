import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { CalculatorService } from './calculator/calculator.service';
import { PropertyCode, PropertyType } from './calculator/common/enums';
import { Properties } from './calculator/properties';
import { DependentProperties } from './calculator/dependent-properties';
import { PropertyValue } from './calculator/common/interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subscription: Subscription = new Subscription();
  debounceTime = 500;
  paramsFormGroup: FormGroup;
  properties: [PropertyCode, any][];

  propertyCodeEnum = PropertyCode;
  enumKeys = [];
  filterProp = '';

  // hack to be able to use the enumeration in the HTML
  public get PropertyCode() {
    return PropertyCode;
  }

  /**
   * Hack to be able to use the PropertyType enumeration in the template.
   */
  public get PropertyType() {
    return PropertyType;
  }

  public isDependent(propertyCode: string) {
    return Properties.isComputed(propertyCode);
  }

  public getType(propertyCode: string) {
    return Properties.getType(propertyCode);
  }

  public getListValues(propertyCode: string) {
    return Properties.getListValues(propertyCode);
  }

  constructor(private fb: FormBuilder, private calculator: CalculatorService) {
    this.enumKeys = Object.keys(this.propertyCodeEnum);

    let initialProperties = Properties.getData(this.filterProp);

    console.log(initialProperties);

    this.properties = Object.assign(
      {},
      ...initialProperties.map((x: PropertyValue) => {
        const container = {};

        container[x.propertyCode] = x.value;

        return container;
      })
    );

    this.paramsFormGroup = this.fb.group(this.properties);
  }

  ngOnInit(): void {
    this.calculate();
    this.subscription.add(
      this.paramsFormGroup.valueChanges
        .pipe(debounceTime(this.debounceTime))
        .subscribe(() => {
          this.calculate();
        })
    );

    console.log(this.subscription);
  }

  getControlLabel(type: string) {
    if (
      this.paramsFormGroup &&
      this.paramsFormGroup.controls &&
      this.paramsFormGroup.controls[type]
    ) {
      return this.paramsFormGroup.controls[type].value;
    }
    return 0;
  }

  updateData() {
    let initialProperties = Properties.getData(this.filterProp);

    console.log(initialProperties);

    this.properties = Object.assign(
      {},
      ...initialProperties.map((x: PropertyValue) => {
        const container = {};

        container[x.propertyCode] = x.value;

        return container;
      })
    );

    this.paramsFormGroup = this.fb.group(this.properties);
    // this.paramsFormGroup.patchValue(this.properties);

    console.log(this.properties);
  }

  async calculate() {
    this.properties = await this.calculator.calculate(
      this.paramsFormGroup.value
    );

    this.paramsFormGroup.patchValue(this.properties);
  }

  onChange(propertyCodeValue) {
    console.log(propertyCodeValue);
    this.filterProp = propertyCodeValue;

    console.log(this.subscription);

    this.subscription.unsubscribe();

    this.updateData();

    this.calculate();
    this.subscription = this.paramsFormGroup.valueChanges
      .pipe(debounceTime(this.debounceTime))
      .subscribe(() => {
        this.calculate();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
