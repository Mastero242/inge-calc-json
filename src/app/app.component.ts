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
  properties: Record<PropertyCode, any>;

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
    return Properties.isDependent(propertyCode);
  }

  constructor(private fb: FormBuilder, private calculator: CalculatorService) {
    const initialProperties = Properties.getData();
    this.properties = Object.assign(
      {},
      ...initialProperties.map((x: PropertyValue) => ({
        [x.propertyCode]: x.value,
      }))
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

  async calculate() {
    this.properties = await this.calculator.calculate(
      this.paramsFormGroup.value
    );
    this.paramsFormGroup.patchValue(this.properties);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
