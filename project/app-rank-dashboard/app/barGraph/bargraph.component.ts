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
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
        };

        var options = {
            seriesBarDistance: 10
        };

        new Chartist.Bar('#BarGraph', data, options);
    }
}