import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./market/home/home.component";
import { MarketModule } from "./market/market.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "/" },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./market/market.module").then((m) => m.MarketModule),
        // canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
