import { Component } from '@angular/core';
import { SIMService } from './sim.service';

@Component({
  selector: 'app-sim',
  imports: [],
  templateUrl: './sim.component.html',
  styleUrl: './sim.component.scss'
})
export class SIMComponent {
  test = 'Not done'
  constructor(public simService: SIMService) {
    this.simService.getSessionList('sim_session_data').subscribe((data) => {
      this.test = "Done!";
      console.log(data);
    });
  }
}
