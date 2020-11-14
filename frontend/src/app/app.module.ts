import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {DataService} from "./shared/services/data.service"
import { SyncService } from './shared/services/sync.service';
import { MarketModule } from './market/market.module';
// import { UserIdleModule } from "angular-user-idle";
import { MDBBootstrapModule } from "angular-bootstrap-md";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // UserIdleModule.forRoot({ idle: 300, timeout: 1, ping: 120 }),
    MarketModule, //since initial route component
    MDBBootstrapModule.forRoot(),
  ],
  providers: [DataService, SyncService],
  bootstrap: [AppComponent],
})
export class AppModule {}
