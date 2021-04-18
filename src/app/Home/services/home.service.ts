import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  public username: string = 'Shaun';
  public statData$ = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {}

  public getStat() {
    this.http.get('assets/dummy.json').subscribe({
      next: this.dataHandler.bind(this),
      error: this.errorHandler.bind(this),
    });
  }

  private dataHandler(data: any) {
    this.statData$.next(data);
  }

  private errorHandler(err: any) {
    throw new Error(err);
  }
}
