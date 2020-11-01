import { Component } from '@angular/core';
import { ICourse, IQuiz, IScholarship } from '../shared/interfaces';
import { HomeService } from './Home.service';

@Component({
  selector: 'home-component',
  moduleId: module.id,
  templateUrl: 'Home.html',
  providers: [HomeService],
})
export class HomeComponent {
  public username: string;
  public myCourses: Array<ICourse>;
  public myQuizzes: Array<IQuiz>;
  public myScholarship: Array<IScholarship>;

  constructor(private _homeService: HomeService) {
    this.username = this._homeService.username;
    this.myCourses = this._homeService.getMyCourses();
    this.myQuizzes = this._homeService.getMyQuizzes();
    this.myScholarship = this._homeService.getMyScholarship();
  }
}
