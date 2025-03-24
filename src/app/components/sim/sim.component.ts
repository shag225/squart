import { Component } from '@angular/core';
import { SIMService } from './sim.service';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { map } from 'rxjs';
import moment from 'moment';
import { SimBarChartComponent } from './sim-bar-chart/sim-bar-chart.component';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-sim',
  imports: [ AgGridAngular, SimBarChartComponent ],
  templateUrl: './sim.component.html',
  styleUrl: './sim.component.scss'
})
export class SIMComponent {
  test = 'Not done'
  rowData: any;
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "date" },
    { field: "time" },
    { field: "action" },
  ];

  constructor(public simService: SIMService) {}

  ngOnInit() {
    this.simService.getSessionList('sim_session_data').pipe(
      map((s) => {
        s.map((session) => {
          const newDate = new Date(Number(session.sessionId) * 1000); 
          session.date = moment(newDate).format("MM/DD/YYYY");
          session.time = moment(newDate).format("hh:mm:ss A");
       })
       return s;
      })
    ).subscribe((data) => {
      this.rowData = data;
    });
  }

  createSession = (action: string) => {
    this.simService.createSession(action).subscribe((data) => {
      console.log(data)
    });
  }
}
