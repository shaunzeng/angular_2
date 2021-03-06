import { Component, OnInit } from '@angular/core';

import {
  interval,
  Subscription,
  of,
  asyncScheduler,
  queueScheduler,
  asapScheduler,
  Subject,
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
} from 'rxjs';

import { observeOn, publish, refCount, share, subscribeOn, tap } from 'rxjs/operators';

@Component({
  selector: 'test-component',
  moduleId: module.id,
  templateUrl: 'Test.component.html',
})
export class TestComponent implements OnInit {
  viewMode: string = 'js';

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

  constructor() {}

  ngOnInit() {
    console.log('on init');
  }

  ngDoCheck() {
    console.log('do check');
  }

  subscribe(num: number) {
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

  runRefCount() {
    // Turn the interval observable into a ConnectableObservable (hot)
    const refCountInterval = interval(2000).pipe(
      tap((num) => console.log(`refCount ${num}`)),
      publish(),
      refCount()
    );

    const publishedInterval = interval(1000).pipe(
      tap((num) => console.log(`publish ${num}`)),
      publish()
    );

    refCountInterval.subscribe((data) => {
      console.log('sub #1 : ', data);
    });
    refCountInterval.subscribe((data) => {
      console.log('sub #2 : ', data);
    });
    // 'refCount 0' -----> 'refCount 1' -----> etc
    // All subscriptions will receive the same value and the tap (and
    // every other operator) before the publish operator will be executed
    // only once per event independently of the number of subscriptions.

    publishedInterval.subscribe((data) => {
      console.log('publish #1: ', data);
    });
    publishedInterval.subscribe((data) => {
      console.log('publish #2: ', data);
    });

    //publishedInterval.connect();
    // Nothing happens until you call .connect() on the observable.
  }

  run1() {
    console.log('Msg 1, sync');

    setTimeout(() => {
      console.log('Msg 2, set timeout');
    });

    Promise.resolve()
      .then(() => {
        console.log('Msg 3, Promise');
      })
      .then(() => {
        console.log('Msg 4, Promise 2');
      });

    console.log('Msg 5, sync');
  }

  run2() {
    const logTime = (() => {
      let start = Date.now();
      return (str: string | number) => {
        console.log('ran ' + str);
        console.log(Date.now() - start + 'ms');
        start = Date.now();
      };
    })();

    setTimeout(() => {
      logTime('set timeout 1, 200');
    }, 200);

    setTimeout(() => {
      logTime('set timeout 2, 0');
    }, 0);

    Promise.resolve()
      .then(() => {
        logTime('Promise 1');
      })
      .then(() => {
        logTime('Promise 2');
      });

    this.blocker(1000000007);
    logTime('main tasks');
  }

  blocker(num: number) {
    let i = 0;
    while (i <= num) {
      i++;
    }
  }

  run3() {
    of([1, 2, 3]).pipe(observeOn(asyncScheduler)).subscribe(console.log);

    this.blocker(1000000007);
    console.log('some tasks');
  }

  run4() {
    of([1, 2, 3]).pipe(observeOn(queueScheduler)).subscribe(console.log);

    this.blocker(1000000007);
    console.log('some tasks');
  }

  run5() {
    of([1, 2, 3]).pipe(subscribeOn(asyncScheduler)).subscribe(console.log);

    this.blocker(1000000007);
    console.log('some tasks');
  }

  run6() {
    of([1, 2, 3], asyncScheduler).subscribe(console.log);

    this.blocker(1000000007);
    console.log('some tasks');
  }

  run7() {
    of([1, 2, 3], asyncScheduler).subscribe((data) => {
      console.log('async scheduler', data);
    });

    of([4, 5, 6], asapScheduler).subscribe((data) => {
      console.log('asap scheduler', data);
    });

    of([7, 8, 9], queueScheduler).subscribe((data) => {
      console.log('queue scheduler', data);
    });
  }

  runSubject() {
    let sub = new Subject();

    sub.next(1); // no one gets as no subscription yet

    sub.subscribe((val) => console.log('Sub 1 : ', val));
    sub.next(2);

    sub.subscribe((val) => console.log('Sub 2 : ', val));
    sub.next(3);
  }

  runAsyncSubject() {
    let sub = new AsyncSubject();

    sub.next(1);
    sub.next(2);
    sub.next(666);
    sub.complete();

    //always get the last value right before complete;
    sub.subscribe((val) => console.log('sub 1  : ', val));
    sub.subscribe((val) => console.log('sub 2  : ', val));
  }

  runBehaviorSubject() {
    const subject = new BehaviorSubject(123);

    // two new subscribers will get initial value => output: 123, 123
    subject.subscribe((val) => console.log('sub 1 : ', val));
    subject.subscribe((val) => console.log('sub 2 : ', val));

    // two subscribers will get new value => output: 456, 456
    subject.next(456);

    // new subscriber will get latest value (456) => output: 456
    subject.subscribe((val) => console.log('sub 3 : ', val));

    // all three subscribers will get new value => output: 789, 789, 789
    subject.next(789);
  }

  runReplaySubject() {
    const sub = new ReplaySubject(3);

    sub.next(1);
    sub.next(2);
    sub.subscribe((val) => console.log('sub 1  : ', val)); // OUTPUT => 1,2
    sub.next(3); // OUTPUT => 3
    sub.next(4); // OUTPUT => 4
    sub.subscribe((val) => console.log('sub 2  : ', val)); // OUTPUT => 2,3,4 (log of last 3 values from new subscriber)
    sub.next(5); // OUTPUT => 5,5 (log from both subscribers)
  }

  runExperiment() {}

  runJs() {
    var a = b();
    var c = d();

    console.log(a);
    console.log(c);

    function b() {
      return c;
    }

    var d = function (): any {
      return b();
    };

    /*
     function b(){
        return c;
     }

     var a;
     var c;
     var d;
     a = b();
     c = d();
     a;
     c;
     d = function(){
       return b();
     }

    */
  }

  runPrototype() {}

  runGenerator() {
    function* generatorExample() {
      yield 8;
      yield 9;
      yield 10;
    }

    const gen = generatorExample();
  }
}
