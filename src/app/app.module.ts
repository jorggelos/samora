import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { AppComponent } from "./app.component";
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgApexchartsModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
