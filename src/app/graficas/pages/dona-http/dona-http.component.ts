import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartType, ChartConfiguration } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Doughnut
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#0075ed',
          '#00baf7',
          '#00e0db',
          '#00f7ad',
          '#00ed63',
        ],
      },
    ],
  };

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    this.graficasService.getUsuarioRedesSocialesDonaData().subscribe(({labels, values}) => {
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets[0].data = values;
    });
  }
}
