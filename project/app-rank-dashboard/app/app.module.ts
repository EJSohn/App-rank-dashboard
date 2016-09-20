import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import components
import { AppComponent } from "./app/app.component";
import { PieGraphComponent } from "./pieGraph/piegraph.component";
import { BarGraphComponent } from "./barGraph/bargraph.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
        AppComponent,
        PieGraphComponent,
        BarGraphComponent
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
