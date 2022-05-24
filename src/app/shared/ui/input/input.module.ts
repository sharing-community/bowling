import { NgModule } from "@angular/core";
import { InputComponent } from "./components";
import { InputDirective } from './directives';

@NgModule({
  declarations: [InputComponent, InputDirective],
  exports: [InputComponent, InputDirective],
})
export class InputModule {}
