import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {
    console.log(this.print(4, 5));
  }
  print(r: number, c: number) {
    const ans = Array.from(new Array(r), () => new Array(c).fill(0));
    for (let j = 0; j < c; j++) {
      for (let i = 0; i < r; i++) {
        if (j % 2 === 0) {
          ans[i][j] = r * j + i + 1;
        } else {
          ans[i][j] = r * j + (r - i);
        }
      }
    }

    return ans;
  }
}
