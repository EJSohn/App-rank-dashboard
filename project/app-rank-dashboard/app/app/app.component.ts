import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: 'app/app/app.component.html',
  styleUrls: ['app/app/app.component.css']
})


export class AppComponent {

  constructor() { }

  jumpFlog(): void {
    for(var i=0; i<2; i++){
      $(".mascot-frog").effect('bounce',{times:2}, 500);
    }
  }
 }
