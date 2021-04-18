import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor() {
    console.log('service initited');
  }
  private settings = new Map();
  public get(key: string): any {
    return this.settings.get(key);
  }
  public set(key: string, value: any): any {
    return this.settings.set(key, value);
  }
}
