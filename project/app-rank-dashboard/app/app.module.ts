import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import components
import { AppComponent } from "./app/app.component";
import { PieGraphComponent } from "./pieGraph/piegraph.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
        AppComponent,
        PieGraphComponent
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
