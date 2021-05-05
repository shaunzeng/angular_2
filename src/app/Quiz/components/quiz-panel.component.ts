import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'quiz-panel',
  moduleId: module.id,
  templateUrl: './quiz-panel.component.html',
})
export class QuizPanelComponent implements OnInit {
  public actionSub$: Observable<string>;

  constructor(public widgetService: WidgetService) {}

  ngOnInit() {
    this.actionSub$ = this.widgetService.actionObs$;
  }
}
