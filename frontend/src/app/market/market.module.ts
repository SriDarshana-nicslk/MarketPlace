import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { AddProductComponent } from "./product/add-product/add-product.component";
import { EditProductComponent } from "./product/edit-product/edit-product.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler";

@NgModule({
  declarations: [HomeComponent, AddProductComponent, EditProductComponent],
  imports: [CommonModule, MDBBootstrapModule.forRoot()],
  exports: [HomeComponent],
  entryComponents: [],
})
export class MarketModule {}
