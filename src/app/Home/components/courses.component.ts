import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../services/home.service';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'home-courses',
  moduleId: module.id,
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses$: Subscription;
  courses: any[];

  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    this.courses$ = this._homeService.statData$
      .asObservable()
      .pipe(
        distinctUntilChanged(),
        filter((data) => !!data),
        map((data) => data['coursesInProgress'])
      )
      .subscribe((data) => {
        this.courses = data;
      });
  }

  ngOnDestroy() {
    this.courses$.unsubscribe();
  }
}
