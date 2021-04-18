import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ICourse, IQuiz, IScholarship } from '../../shared/interfaces';
import { HomeService } from '../services/home.service';
import ApexCharts from 'apexcharts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home-container',
  moduleId: module.id,
  templateUrl: './home-container.component.html',
  providers: [HomeService],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public username: string;
  public myCourses: Array<ICourse>;
  public myQuizzes: Array<IQuiz>;
  public myScholarship: Array<IScholarship>;
  public statsObs$: Subscription;

  options = {
    chart: {
      type: 'area',
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
  };

  chart: ApexCharts;
  @ViewChild('chart') myChartEle: ElementRef;

  constructor(private _homeService: HomeService) {
    this.username = this._homeService.username;
  }

  ngOnInit() {
    this._homeService.getStat();
  }

  ngAfterViewInit() {
    this.chart = new ApexCharts(this.myChartEle.nativeElement, this.options);
    this.chart.render();
  }
}
