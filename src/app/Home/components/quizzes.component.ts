import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../services/home.service';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'home-quizzes',
  moduleId: module.id,
  templateUrl: './quizzes.component.html',
})
export class QuizzesComponent implements OnInit, OnDestroy {
  quizzes$: Subscription;
  quizzes: any[];

  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    this.quizzes$ = this._homeService.statData$
      .asObservable()
      .pipe(
        distinctUntilChanged(),
        map((data) => data['quizzes'])
      )
      .subscribe((data) => {
        this.quizzes = data;
      });
  }

  ngOnDestroy() {
    this.quizzes$.unsubscribe();
  }
}
