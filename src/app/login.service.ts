import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  Login$ = new BehaviorSubject<boolean>(false);
  username: string = '';

  constructor() {
    console.log('Login service initited');
  }

  login(name: string, password: string) {
    return new Promise((res, rej) => {
      if (name !== 'shaun' || password !== 'shaun') {
        rej('Wrong Password');
      } else {
        this.Login$.next(true);
        this.username = name;
        res(true);
      }
    });
  }

  logout() {
    return new Promise((res, rej) => {
      this.Login$.next(false);
      this.username = '';
      res(true);
    });
  }
}
