import { Component } from '@angular/core';

// import test static data
import { DATA } from '../static/piegraph-data';

@Component({
    selector: 'pie-graph',
    templateUrl: 'app/pieGraph/piegraph.component.html',
    styleUrls: ['app/pieGraph/piegraph.component.css']
})

export class PieGraphComponent { 
    constructor() { }

    ngOnInit(): void {

        // chart.js 's options
        var canvas : any = document.getElementById("PieGraph");
        var ctx = canvas.getContext("2d");

        // make chart
        var PieGraph = new Chart(ctx, {
            data: DATA,
            type: 'polarArea',
        });
        
    }
}