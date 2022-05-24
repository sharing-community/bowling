import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutStore } from "../../../../shared";
import { FormArray, FormControl } from "@angular/forms";

@Component({
  selector: 'game-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigurationComponent {

  public readonly state$ = this.store.state$;

  public readonly formArray = new FormArray([]);

  public readonly pins = new FormControl(0);

  constructor(
    protected readonly store: LayoutStore
  ) { }

  public register(): void {
    this.formArray.push(new FormControl(''));
  }

  public getControl(index: number): FormControl {
    return this.formArray.at(index) as FormControl;
  }

  public change(status: boolean): void {
    if (status) {
      this.store.reset();
      this.formArray.enable();
    } else {
      if (this.formArray.length === 0) {
        return;
      }
      this.store.register(this.formArray.value);
      this.formArray.disable();
    }
  }

  public roll(): void {
    this.store.roll(this.pins.value);
    this.pins.setValue(0);
  }

}
