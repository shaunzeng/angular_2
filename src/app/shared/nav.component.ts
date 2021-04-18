import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  moduleId: module.id,
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
