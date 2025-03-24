import { Component } from '@angular/core';
import { SIMService } from './sim.service';

@Component({
  selector: 'app-sim',
  imports: [],
  templateUrl: './sim.component.html',
  styleUrl: './sim.component.scss'
})
export class SIMComponent {
  constructor(public simService: SIMService) {
    this.simService.getSessionList().subscribe((data) => {
      console.log(data);
    });

  }
}
