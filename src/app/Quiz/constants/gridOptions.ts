import { GridOptions } from 'ag-grid-community';

export const GRID_OPTIONS: GridOptions = {
  rowData: [],
  columnDefs: [],
  suppressRowClickSelection: false,
  rowSelection: 'multiple',
  rowMultiSelectWithClick: true,
  enableRangeSelection: true,
  rowDragManaged: true,
  singleClickEdit: true,
  enableCellChangeFlash: true,
};
