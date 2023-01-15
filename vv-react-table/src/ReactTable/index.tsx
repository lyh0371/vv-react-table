import React, { memo } from 'react';
import './index.scss';
import { Cell, Column, HeaderCell, RowDataType, Table } from 'rsuite-table';
import { columnProps, tableProps } from './props';
import 'rsuite-table/dist/css/rsuite-table.css';
import { columnsType, ReactTableType } from './types';
import SelectInput from './components/SelectInput';
const ReactTable = (props: ReactTableType) => {
  const { columns, rowSelection, data } = props;
  // 把设置为 hidden 的过滤掉
  const noHiddenColumns = columns.filter((item) => !item.hidden);
  // 生成 Column props
  const showSelectInput = rowSelection && typeof rowSelection === 'object';

  console.log('---');

  return (
    <div className="lyh-react-table-wrapper">
      <Table virtualized {...tableProps(props)}>
        {showSelectInput && data.length > 0 && SelectInput({ rowSelection, data })}
        {noHiddenColumns.map((item, index) => {
          return (
            <Column key={index} {...columnProps(item)} flexGrow={item.width ? undefined : 1}>
              {/* 头部 */}
              <HeaderCell>{item.title}</HeaderCell>
              {/* 对应的数据 */}
              {item.render && typeof item.render === 'function' ? (
                <Cell>
                  {(rowData) => {
                    return item.render!(rowData as columnsType);
                  }}
                </Cell>
              ) : (
                <Cell dataKey={item.dataIndex} />
              )}
            </Column>
          );
        })}
      </Table>
    </div>
  );
};

export * from './types';

export default memo(ReactTable);
