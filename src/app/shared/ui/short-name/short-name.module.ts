import { NgModule } from "@angular/core";
import { ShortNamePipe } from "./pipes";

@NgModule({
  declarations: [ShortNamePipe],
  exports: [ShortNamePipe]
})
export class ShortNameModule {}
