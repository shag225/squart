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
    this.simService.getSessionList('sim_session_data').subscribe((data) => {
      this.rowData = data;
      console.log(this.rowData)
    });
  }

  createSession = (action: string) => {
    this.simService.createSession(action).subscribe((data) => {
      console.log(data)
    });
  }
}
