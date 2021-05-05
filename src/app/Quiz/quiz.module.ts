import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizContainerComponent } from './container/quiz.component';
import { QuizDataComponent } from './components/quiz-data.component';
import { AgGridModule } from 'ag-grid-angular';
import { WidgetService } from './services/widget.service';
import { QuizPanelComponent } from './components/quiz-panel.component';

export const routes: Routes = [
  {
    path: '',
    component: QuizContainerComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), AgGridModule.withComponents([])],
  declarations: [QuizDataComponent, QuizContainerComponent, QuizPanelComponent],
  providers: [WidgetService],
})
export class QuizModule {
  constructor() {
    console.log('quiz module instantiated');
  }
}
