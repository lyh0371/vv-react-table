import React from 'react';
import { HeaderCell } from 'rsuite-table';

interface TableHeaderPropsType {
  children: React.ReactNode;
}
const TableHeader: React.FC<TableHeaderPropsType> = (props) => {
  // console.log('children', children);

  return <HeaderCell>{props.children}</HeaderCell>;
};

export default TableHeader;
