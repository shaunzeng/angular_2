import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { MainChartOptions } from '../models/charts';
import { Observable } from 'rxjs';

@Component({
  selector: 'home-stats',
  moduleId: module.id,
  templateUrl: './stats.component.html',
})
export class StatsComponent implements OnInit, OnDestroy {
  public statsObs$: Observable<any>;

  options: MainChartOptions = {
    chart: {
      type: 'area',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },

    title: {
      text: 'Fundamental Analysis',
      align: 'left',
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left',
    },
    series: [
      {
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    legend: {
      horizontalAlign: 'left',
    },
  };

  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    this.statsObs$ = this._homeService.statData$.asObservable();
  }

  ngOnDestroy() {}
}
