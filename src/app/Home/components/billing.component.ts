import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../services/home.service';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'home-billing',
  moduleId: module.id,
  templateUrl: './billing.component.html',
})
export class BillingComponent implements OnInit, OnDestroy {
  billing$: Subscription;
  billing: any[];

  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    this.billing$ = this._homeService.statData$
      .asObservable()
      .pipe(
        distinctUntilChanged(),
        map((data) => data['paymentHistory'])
      )
      .subscribe((data) => {
        this.billing = data;
      });
  }

  ngOnDestroy() {
    this.billing$.unsubscribe();
  }
}
