import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import components
import { AppComponent } from "./app/app.component";
import { PieGraphComponent } from "./pieGraph/piegraph.component";
import { BarGraphComponent } from "./barGraph/bargraph.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
        AppComponent,
        PieGraphComponent,
        BarGraphComponent,
        DashboardComponent
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
