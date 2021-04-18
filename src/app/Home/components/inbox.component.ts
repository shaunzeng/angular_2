import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../services/home.service';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'home-inbox',
  moduleId: module.id,
  templateUrl: './inbox.component.html',
})
export class InboxComponent implements OnInit {
  mails$: Subscription;
  mails: any[];

  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    this.mails$ = this._homeService.statData$
      .asObservable()
      .pipe(
        distinctUntilChanged(),
        map((data) => data['mails'])
      )
      .subscribe((data) => {
        this.mails = data;
      });
  }

  ngOnDestroy() {
    this.mails$.unsubscribe();
  }
}
