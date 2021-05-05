import { Component, OnInit } from '@angular/core';
import { GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GRID_OPTIONS } from '../constants/gridOptions';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'quiz-data',
  moduleId: module.id,
  templateUrl: './quiz-data.component.html',
})
export class QuizDataComponent implements OnInit {
  public gridOptions: GridOptions = { ...GRID_OPTIONS };
  public data$: Subscription;
  private _gridApi: GridApi;
  private _gridColApi: any;
  public columnDefs: any;
  public rowData: any;

  constructor(public widgetService: WidgetService) {}

  ngOnInit() {
    this.gridOptions.context = { ...this.gridOptions.context, componentParent: this };
    this.addCallbacks();
    this.data$ = this.widgetService.dataObs$.pipe(filter((data) => !!data)).subscribe(this.handleData.bind(this));
  }

  private handleData(data: any) {
    this.columnDefs = Object.keys(data[0]).map((col) => ({ field: col, editable: true }));
    this.rowData = data;
  }

  private addCallbacks() {
    this.gridOptions.onCellFocused = this.onCellFocused.bind(this);
    this.gridOptions.onCellClicked = this.onCellClicked.bind(this);
  }

  onGridReady(params: GridReadyEvent) {
    console.log('on grid ready', params);
    this._gridApi = params.api;
    this._gridColApi = params.columnApi;
  }

  onModelUpdated(params: GridReadyEvent) {
    console.log('on model updated ', params);
    this.widgetService.performTransformation('MODEL_UPDATED');
  }

  onRowSelected(params: GridReadyEvent) {
    console.log('on row selected ', params);
    this.widgetService.performTransformation('ROW_SELECTED');
  }

  onColChange(params: GridReadyEvent) {
    console.log('on col change ', params);
    this.widgetService.performTransformation('COLUMN_CHANGED');
  }

  onAddColPinned(params: GridReadyEvent) {
    console.log('on add col pinned');
    this.widgetService.performTransformation('COLUMN_PINNED');
  }

  onCellRangeChange(params: any) {
    console.log('on cell range change');
    this.widgetService.performTransformation('CELL_RANGE_CHANGED');
  }

  onCellFocused(param: any) {
    console.log('on cell change');
    this.widgetService.performTransformation('CELL_CHANGED');
  }

  onCellClicked(params: any) {
    console.log('on Cell clicked');
    this.widgetService.performTransformation('CELL_CLICKED');
  }
}
