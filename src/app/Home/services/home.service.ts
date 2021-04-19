import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IStat } from '../models/data';

@Injectable()
export class HomeService {
  public username: string = 'Shaun';
  public statData$ = new BehaviorSubject<IStat>(null);

  constructor(private http: HttpClient) {}

  public getStat() {
    const random = Math.floor(Math.random() * 4);
    this.http.get(`assets/dummy${random}.json`).subscribe({
      next: this.dataHandler.bind(this),
      error: this.errorHandler.bind(this),
    });
  }

  private dataHandler(data: any) {
    setTimeout(() => {
      this.statData$.next(data);
    }, 3000);
  }

  private errorHandler(err: any) {
    throw new Error(err);
  }
}
