import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICourse, IQuiz, IScholarship } from '../shared/interfaces';
import { HomeService } from './Home.service';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'home-component',
  moduleId: module.id,
  templateUrl: 'Home.html',
  providers: [HomeService],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public username: string;
  public myCourses: Array<ICourse>;
  public myQuizzes: Array<IQuiz>;
  public myScholarship: Array<IScholarship>;

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
    this.myCourses = this._homeService.getMyCourses();
    this.myQuizzes = this._homeService.getMyQuizzes();
    this.myScholarship = this._homeService.getMyScholarship();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    console.log('view init : ', this.myChartEle.nativeElement, ApexCharts);
    this.chart = new ApexCharts(this.myChartEle.nativeElement, this.options);
    this.chart.render();
  }
}
