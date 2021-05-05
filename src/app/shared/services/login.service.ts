import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  public isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public username: string;
  public instanceName: string;

  constructor() {
    console.log('Login service instantiated');
    this.instanceName = 'Shaun';
  }

  login(name: string, password: string) {
    return new Promise((res, rej) => {
      if (name !== 'shaun' || password !== 'shaun') {
        rej('Wrong Password');
      } else {
        this.isLoggedIn$.next(true);
        this.username = name;
        res(true);
      }
    });
  }

  logout() {
    return new Promise((res, rej) => {
      this.isLoggedIn$.next(false);
      this.username = null;
      res(true);
    });
  }

  setName(name: string) {
    this.instanceName = name;
  }

  getName() {
    return this.instanceName;
  }
}
