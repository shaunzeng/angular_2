import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IStat } from '../models/data';
import { LoginService } from '@app/shared/services/login.service';

@Injectable()
export class HomeService {
  public statData$ = new BehaviorSubject<IStat>(null);
  public instanceName: string;

  constructor(private http: HttpClient, private loginService: LoginService) {
    console.log('home service instantiated ');
  }

  public getStat(username: string) {
    const random = Math.floor(Math.random() * 4);
    this.http.get(`assets/dummy${random}.json`).subscribe({
      next: this.dataHandler.bind(this),
      error: this.errorHandler.bind(this),
    });
  }

  private dataHandler(data: any) {
    setTimeout(() => {
      this.statData$.next(data);
    }, 1500);
  }

  private errorHandler(err: any) {
    throw new Error(err);
  }

  setName(name: string) {
    this.instanceName = name;
  }

  getName() {
    return this.instanceName;
  }
}
