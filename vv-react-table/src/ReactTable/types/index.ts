import React from 'react';
import { ColumnProps, RowDataType, TableProps } from 'rsuite-table';

export type RowSelection = {
  type?: 'checkbox' | 'radio'; // 类型
  key: string; // 唯一标识
  defaultSelectedAllRows?: boolean; // 是否默认选中全部
  defaultSelectedKeys?: string[]; // 默认选中
  onChange: (
    ids: string[],
    rows: Obj[],
    id: string | undefined,
    row: Obj,
  ) => void; // 点击选择的执行函数
  selectRender?: () => void; // 可以自定义选择逻辑 比如样式 是否可以选中
  fixed?: 'left';
  width?: number;
};
//每一列的类型
export interface columnsType extends ColumnProps {
  /**
   * 每一列的类型
   */
  title: string; // 头部标题
  dataIndex?: string; // 字段
  hidden?: boolean; // 是否隐藏
  contextMenu?: boolean; // 是否开启右键菜单
  rightClickMenu?: {
    render: (row: any, index: number) => React.ReactNode;
  }; // 自定义此列右键菜单
  render?: (row: any, index?: number) => JSX.Element;
  columnChildren?: columnsType[]; // 合并头部单元格
  groupHeaderHeight?: number;
}

// table 类型
export interface ReactTableType
  extends Omit<TableProps, 'defaultExpandAllRows' | 'data'> {
  /**
   * table props 类型
   */
  columns: columnsType[];
  rowSelection?: RowSelection; // 是否支持选择行
  data: RowDataType[];
  dbClickFull?: boolean;
  rightClickMenu?: {
    render: (row: any, index: number) => React.ReactNode;
  }; // 右键菜单
}

export interface TColumn<T> extends Omit<columnsType, 'dataIndex'> {
  /**
   * column 类型
   */
  dataIndex?: keyof T;
  render?: (row: T, index?: number) => JSX.Element;
}
