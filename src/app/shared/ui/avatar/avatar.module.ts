import { NgModule } from "@angular/core";
import { AvatarComponent } from "./components";
import { ShortNameModule } from "../short-name";

@NgModule({
  declarations: [AvatarComponent],
  exports: [AvatarComponent],
  imports: [ShortNameModule]
})
export class AvatarModule {}
