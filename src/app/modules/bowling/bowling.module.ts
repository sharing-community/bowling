import { NgModule } from '@angular/core';

import { BowlingComponent } from "./containers";
import { ReactiveComponentModule } from "@ngrx/component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PlayerComponent } from './components';

const CONTAINERS = [BowlingComponent];
const COMPONENTS = [PlayerComponent];
@NgModule({
  declarations: [CONTAINERS, COMPONENTS],
  imports: [
    ReactiveComponentModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    CONTAINERS,
    COMPONENTS
  ]
})
export class BowlingModule {}
