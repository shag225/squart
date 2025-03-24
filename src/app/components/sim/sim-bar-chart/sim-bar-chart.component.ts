import { Component, Input } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';
import { Session } from '../session.model';
import moment from 'moment';

@Component({
  selector: 'app-sim-bar-chart',
  imports: [AgCharts],
  templateUrl: './sim-bar-chart.component.html',
  styleUrl: './sim-bar-chart.component.scss'
})
export class SimBarChartComponent {
  @Input() sessions: Session[] | undefined
  public chartOptions: AgChartOptions;
  constructor() {
    console.log(this.sessions);
    this.sessions?.map((session) => {
      session.month = moment(session.date).format("MMM");
    })
    this.chartOptions = {
      // Data: Data to be displayed in the chart
      data: [
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
        { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
        { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
        { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
      ],
      // Series: Defines which chart type and data to use
      series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }]
    };
  }
}
