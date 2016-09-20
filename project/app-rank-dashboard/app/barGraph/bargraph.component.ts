import { Component } from '@angular/core';

@Component({
    selector: 'bar-graph',
    templateUrl: 'app/barGraph/bargraph.component.html',
    styleUrls: ['app/barGraph/bargraph.component.css']
})

export class BarGraphComponent {
    constructor() { }

    ngOnInit(): void {

        var data = {
        labels: ['Games', 'Business', 'LifeStyle', 'Entertainment', 'Book' ],
        series: [
            [12, 5, 3, 7, 5],
            [3, 3, 1, 1, 4]
        ]
        };

        var options = {
            seriesBarDistance: 10
        };

        new Chartist.Bar('#BarGraph', data, options);
    }
}