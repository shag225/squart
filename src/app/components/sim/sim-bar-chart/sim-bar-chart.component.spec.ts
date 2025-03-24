import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimBarChartComponent } from './sim-bar-chart.component';

describe('SimBarChartComponent', () => {
  let component: SimBarChartComponent;
  let fixture: ComponentFixture<SimBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
