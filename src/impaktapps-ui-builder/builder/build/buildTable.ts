import Table from "./uischema/table";
import _ from "lodash";
import buildUiSchema  from "./buildUiSchema";
import lazyLoadingTable from "./uischema/lazyLoadingTable";

export const buildTable = (config: any, componentScope: string) => {
  const table: any = _.cloneDeep(Table);
  table.scope = componentScope;
  if (config.style) {
    table.config.style = JSON.parse(config.style)
  }
  if (config.lazyLoading) {
    table.config.main.lazyLoading = config.lazyLoading === "YES" ? true : false;
  }
  if (config.SelectionAvailable) {
    table.config.main.Selection = config.SelectionAvailable === "YES" ? true : false
  };
  if (config.ColumnResizingAvailable) {
    table.config.main.disableColumnResizing = config.ColumnResizingAvailable === "YES" ? true : false
  };
  if (config.DragAvailable) {
    table.config.main.enableDrag = config.DragAvailable === "YES" ? true : false
  };
  if (config.selectKey) {
    table.config.main.selectKey = config.selectKey
  }
  return table;
}

export const buildLazyLoadingTable = (config: any, componentScope: string) => {
  const table: any = _.cloneDeep(lazyLoadingTable);
  table.scope = componentScope;
  if (config.style) {
    table.config.style = JSON.parse(config.style)
  }
  if (config.SelectionAvailable) {
    table.config.main.Selection = config.SelectionAvailable === "YES" ? true : false
  };
  if (config.ColumnResizingAvailable) {
    table.config.main.disableColumnResizing = config.ColumnResizingAvailable === "YES" ? false : true
  };
  if (config.DragAvailable) {
    table.config.main.enableDrag = config.DragAvailable === "YES" ? true : false
  };
  if (config.selectKey) {
    table.config.main.selectKey = config.selectKey
  }
  table.config.main.label = config.label;
  return table;
}