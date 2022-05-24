import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './containers';
import { AppRoutes } from "./app.routing";
import { BowlingModule, ConfigurationModule } from "./modules";

const CONTAINERS = [LayoutComponent];

@NgModule({
  declarations: [AppComponent, CONTAINERS],
  imports: [
    BrowserModule,
    AppRoutes,
    BowlingModule,
    ConfigurationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
