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
        var ctx = document.getElementById("PieGraph").getContext("2d");

        var PieGraph = new Chart(ctx, {
            data: DATA,
            type: 'polarArea',
        });
        
    }
}