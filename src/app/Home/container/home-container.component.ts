import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ICourse, IQuiz, IScholarship } from '../../shared/interfaces';
import { HomeService } from '../services/home.service';
import ApexCharts from 'apexcharts';
import { Observable, Subscription } from 'rxjs';
import { MainChartOptions } from '../models/charts';

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

  chart: ApexCharts;
  @ViewChild('loading') myChartEle: ElementRef;

  constructor(private _homeService: HomeService) {
    this.username = this._homeService.username;
  }

  count: number = 0;

  ngOnInit() {
    console.log('on init ', this.count++);
    this._homeService.getStat();
    this.statsObs$ = this._homeService.statData$.asObservable().pipe();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on change ', changes, this.count++);
  }

  ngDoCheck() {
    console.log('on do check', this.count++);
  }

  ngAfterContentInit() {
    console.log('after content init', this.count++);
  }

  ngAfterContentChecked() {
    console.log('after content checked ', this.count++);
  }

  ngAfterViewInit() {
    console.log('after view init ', this.count++);
    // this.chart = new ApexCharts(this.myChartEle.nativeElement, this.options);
    //this.chart.render();
  }

  ngAfterViewChecked() {
    console.log('after view checked ', this.count++);
  }
}
