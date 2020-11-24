import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { AddProductComponent } from "./product/add-product/add-product.component";
import { EditProductComponent } from "./product/edit-product/edit-product.component";
import { IconsModule, MDBBootstrapModule } from "angular-bootstrap-md";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [HomeComponent, AddProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    IconsModule,
  ],
  exports: [HomeComponent],
  entryComponents: [],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MarketModule {}
