import { Route, RouterModule } from "@angular/router";
import { LayoutComponent } from "./containers";

const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
