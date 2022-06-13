import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input('horizontal') horizontal: boolean = false;

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public chartType: ChartType = 'bar';
  @Input() public chartData!: ChartConfiguration['data'];


  ngOnInit(): void {
    if (this.horizontal) {
      this.chartType = 'line';
    }
  }
}
