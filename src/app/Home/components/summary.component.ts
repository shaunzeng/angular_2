import { Component, OnInit } from '@angular/core';
import { ChartOptions, PieChartOptions } from '../models/charts';

@Component({
  selector: 'home-summary',
  moduleId: module.id,
  templateUrl: './summary.component.html',
})
export class SummaryComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<PieChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Dummy',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        type: 'line',
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.1,
        },
        toolbar: { show: false },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: '',
        align: 'left',
      },
      grid: {
        borderColor: '#efefef',
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.1,
        },
      },
      xaxis: {
        labels: { show: false },
      },
      yaxis: {
        show: false,
      },
    };

    this.chartOptions2 = {
      series: [
        {
          name: 'Dummy',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        type: 'bar',
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.1,
        },
        toolbar: { show: false },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: '',
        align: 'left',
      },
      grid: {
        show: false,
      },
      xaxis: {
        labels: { show: false },
      },
      yaxis: {
        show: false,
      },
    };

    this.chartOptions3 = {
      series: [44, 55, 13, 43, 22],
      dataLabels: { enabled: false },
      chart: {
        type: 'donut',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {},
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  ngOnInit() {}
}
