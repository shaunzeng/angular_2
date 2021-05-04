import { AfterViewInit, Component, OnInit, SimpleChanges, Optional, Self } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Observable } from 'rxjs';
import { LoginService } from '@app/shared/services/login.service';

@Component({
  selector: 'home-container',
  moduleId: module.id,
  templateUrl: './home-container.component.html',
  providers: [HomeService],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public username: string;
  public statsObs$: Observable<any>;

  constructor(private homeService: HomeService, private loginService: LoginService) {
    this.username = this.loginService.username;
  }

  ngOnInit() {
    this.homeService.getStat(this.loginService.username);
    this.statsObs$ = this.homeService.statData$.asObservable();
  }

  ngOnChanges(changes: SimpleChanges) {}

  ngDoCheck() {
    //console.log('on do check', this.count++);
  }

  ngAfterContentInit() {
    // console.log('after content init', this.count++);
  }

  ngAfterContentChecked() {
    // console.log('after content checked ', this.count++);
  }

  ngAfterViewInit() {
    // console.log('after view init ', this.count++);
    // this.chart = new ApexCharts(this.myChartEle.nativeElement, this.options);
    //this.chart.render();
  }

  ngAfterViewChecked() {
    //console.log('after view checked ', this.count++);
  }
}
