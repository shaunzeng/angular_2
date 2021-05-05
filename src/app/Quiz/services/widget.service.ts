import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class WidgetService {
  public actionWatcher$ = new BehaviorSubject<any>(null);
  public actionObs$ = this.actionWatcher$.asObservable();
  public dataWatcher$ = new BehaviorSubject<any>(null);
  public dataObs$ = this.dataWatcher$.asObservable();
  public instanceName: string;

  constructor() {
    console.log('home service instantiated ');
  }

  performTransformation(name: string) {
    this.actionWatcher$.next(name);
  }

  fetchGridData() {
    this.dataWatcher$.next([
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ]);
  }
}
