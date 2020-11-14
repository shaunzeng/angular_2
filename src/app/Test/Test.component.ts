import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription, Observer, of, Subject } from 'rxjs';
import { publish, share, tap } from 'rxjs/operators';

@Component({
  selector: 'test-component',
  moduleId: module.id,
  templateUrl: 'Test.component.html',
})
export class TestComponent implements OnInit {
  obs1$ = interval(1000);
  sub: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  subText: number = 0;
  subText2: number = 0;
  subText3: number = 0;

  obs2$ = interval(1000).pipe(share());
  sub4: Subscription;
  sub5: Subscription;
  sub6: Subscription;
  subText4: number = 0;
  subText5: number = 0;
  subText6: number = 0;

  ngOnInit() {}

  subscribe(num: number) {
    const cb = {
      next: this.next,
      error: this.error,
      complete: this.complete,
    };

    switch (num) {
      case 1: {
        this.sub = this.obs1$.subscribe(
          (data) => {
            this.subText = data;
          },
          (err) => this.error,
          () => this.complete
        );
        break;
      }

      case 2: {
        this.sub2 = this.obs1$.subscribe(
          (data) => {
            this.subText2 = data;
          },
          (err) => this.error,
          () => this.complete
        );
        break;
      }

      case 3: {
        this.sub3 = this.obs1$.subscribe(
          (data) => {
            this.subText3 = data;
          },
          (err) => this.error,
          () => this.complete
        );
        break;
      }

      case 4: {
        this.sub4 = this.obs2$.subscribe(
          (data) => {
            this.subText4 = data;
          },
          (err) => this.error,
          () => this.complete
        );
        break;
      }
      case 5: {
        this.sub5 = this.obs2$.subscribe(
          (data) => {
            this.subText5 = data;
          },
          (err) => this.error,
          () => this.complete
        );
        break;
      }
      case 6: {
        this.sub6 = this.obs2$.subscribe(
          (data) => {
            this.subText6 = data;
          },
          (err) => this.error,
          () => this.complete
        );
        break;
      }

      default: {
        alert('you fucked up ');
        break;
      }
    }
  }

  private next(data: any) {
    console.log('next called : ', data);
  }

  private error(err: any) {
    console.log('error called : ', err);
  }

  private complete() {
    console.log('complete called ');
  }

  unsubscribe(num: number) {
    switch (num) {
      case 1: {
        this.sub.unsubscribe();
        break;
      }

      case 2: {
        this.sub2.unsubscribe();
        break;
      }

      case 3: {
        this.sub3.unsubscribe();
        break;
      }

      case 4: {
        this.sub4.unsubscribe();
        break;
      }
      case 5: {
        this.sub5.unsubscribe();
        break;
      }
      case 6: {
        this.sub6.unsubscribe();
        break;
      }

      default: {
        alert('you fucked up ');
        break;
      }
    }
  }
}
