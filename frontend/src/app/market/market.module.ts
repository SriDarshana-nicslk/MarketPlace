import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { AddProductComponent } from "./product/add-product/add-product.component";
import { EditProductComponent } from "./product/edit-product/edit-product.component";

@NgModule({
  declarations: [HomeComponent, AddProductComponent, EditProductComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
  entryComponents: [],
})
export class MarketModule {}
