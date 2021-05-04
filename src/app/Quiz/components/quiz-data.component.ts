import { Component, OnInit } from '@angular/core';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import { GRID_OPTIONS } from '../constants/gridOptions';

@Component({
  selector: 'quiz-data',
  moduleId: module.id,
  templateUrl: './quiz-data.component.html',
})
export class QuizDataComponent implements OnInit {
  public gridOptions: GridOptions = { ...GRID_OPTIONS };
  private _agGridParams: GridReadyEvent;

  constructor() {}

  ngOnInit() {
    this.gridOptions.context = { ...this.gridOptions.context, componentParent: this };
    this.addCallbacks();
  }

  private addCallbacks() {
    this.gridOptions.onCellFocused = (params) => {
      console.log('on cell change');
    };

    this.gridOptions.onCellClicked = (params) => {
      console.log('on Cell clicked');
    };
  }

  onGridReady(params: GridReadyEvent) {
    console.log('on grid ready', params);
    this._agGridParams = params;
  }

  onModelUpdated(params: GridReadyEvent) {
    console.log('on model updated ', params);
  }

  onRowSelected(params: GridReadyEvent) {
    console.log('on row selected ', params);
  }

  onColChange(params: GridReadyEvent) {
    console.log('on col change ', params);
  }

  onAddColPinned(params: GridReadyEvent) {
    console.log('on add col pinned');
  }

  onCellRangeChange(params: any) {
    console.log('on cell range change');
  }
}
