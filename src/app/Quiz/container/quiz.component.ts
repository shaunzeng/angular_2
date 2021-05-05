import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'quiz-container',
  moduleId: module.id,
  templateUrl: './quiz.component.html',
})
export class QuizContainerComponent implements OnInit {
  constructor(public widgetService: WidgetService) {}

  ngOnInit() {
    this.widgetService.fetchGridData();
  }
}
