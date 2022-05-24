import { NgModule } from '@angular/core';

import { ConfigurationComponent } from "./containers";
import { ReactiveComponentModule } from "@ngrx/component";
import { ReactiveFormsModule } from "@angular/forms";
import { InputModule } from "../../shared";
import { CommonModule } from "@angular/common";

const CONTAINERS = [ConfigurationComponent];

@NgModule({
  declarations: [CONTAINERS],
  imports: [
    ReactiveComponentModule,
    ReactiveFormsModule,
    InputModule,
    CommonModule
  ],
  exports: [
    ConfigurationComponent
  ]
})
export class ConfigurationModule {}
