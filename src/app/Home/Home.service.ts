import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/Http.service';
import { ICourse, IQuiz, IScholarship } from '../shared/interfaces';

@Injectable()
export class HomeService {
  public username: string;
  private myCourses: ICourse[];
  private myQuizzes: IQuiz[];
  private myScholarship: IScholarship[];

  constructor() {
    this.username = 'Shaun';
    this.myCourses = [
      {
        courseName: 'Angular 2 In Depth',
        courseId: '0001',
        courseCompletion: 50,
        courseCompleted: false,
        courseUrl: 'angular-2-in-depth',
        courseDescription: 'This is a angular 2 course that focuses on angular 2 best pracetices',
      },
      {
        courseName: 'Node In Depth',
        courseId: '0002',
        courseCompletion: 70,
        courseCompleted: false,
        courseUrl: 'node-in-depth',
        courseDescription: 'This is a node js course',
      },
      {
        courseName: 'Bootstrap Fundamentals',
        courseId: '0003',
        courseCompletion: 40,
        courseCompleted: false,
        courseUrl: 'bootstrap-fundamentals',
        courseDescription: 'This is a boostrap cours',
      },
    ];
    this.myQuizzes = [
      { title: 'Angular best practice', course: 'Angular 2 In Depth', grade: 8.9, level: 'Great', isTaken: true },
      { title: 'Node basics', course: 'Node In Depth', grade: 5.9, level: 'Good', isTaken: true },
      { title: 'HTML Basics Quiz 1', course: 'HTML Basics', grade: 2.9, level: 'Failed', isTaken: true },
      { title: 'C# Fundamentals', course: 'C# Fundamentals', isTaken: false },
    ];

    this.myScholarship = [
      { title: 'some grant', amount: 200.0, status: 'Pending', approved: false, source: 'some fund' },
      { title: 'some grant #2', amount: 1000.0, status: 'Approved', approved: true, source: 'some fund' },
    ];
  }

  public getMyCourses(): Array<ICourse> {
    return this.myCourses;
  }

  public getMyQuizzes(): Array<IQuiz> {
    return this.myQuizzes;
  }

  public getMyScholarship(): Array<IScholarship> {
    return this.myScholarship;
  }
}
