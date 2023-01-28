import { memo } from 'react';
import { Cell, Column, ColumnGroup, HeaderCell, Table } from 'rsuite-table';
import SelectInput from './components/SelectInput';
import { columnProps, tableProps } from './props';
import './style/index.scss';
import { columnsType, ReactTableType } from './types';
const ReactTable = (props: ReactTableType) => {
  const { columns, rowSelection, data, headerHeight = 40, rowHeight } = props;
  // 把设置为 hidden 的过滤掉
  const noHiddenColumns = columns.filter((item) => !item.hidden);
  // 生成 Column props
  const showSelectInput = rowSelection && typeof rowSelection === 'object';

  const baseColums = (item: columnsType, index: number, deep: 1 | 2) => {
    return (
      <Column
        key={index}
        {...columnProps(item)}
        flexGrow={item.width ? undefined : 1}
      >
        {/* 头部 */}
        <HeaderCell style={{ lineHeight: `${headerHeight / deep}px ` }}>
          {item.title}
        </HeaderCell>
        {/* 对应的数据 */}
        {item.render && typeof item.render === 'function' ? (
          <Cell
            style={{
              lineHeight: `${rowHeight}px`,
              display: 'table-cell',
              verticalAlign: 'middle',
            }}
          >
            {(rowData) => {
              return item.render!(rowData as columnsType);
            }}
          </Cell>
        ) : (
          <Cell
            style={{
              lineHeight: `${rowHeight}px`,
              display: 'table-cell',
              verticalAlign: 'middle',
            }}
            dataKey={item.dataIndex}
          />
        )}
      </Column>
    );
  };
  return (
    <div className="lyh-react-table-wrapper">
      <Table virtualized {...tableProps(props)} bordered cellBordered>
        {showSelectInput &&
          data.length > 0 &&
          SelectInput({ rowSelection, data, headerHeight, rowHeight })}
        {noHiddenColumns.map((item, index) => {
          if (item.columnChildren && item.columnChildren.length > 0) {
            return (
              <ColumnGroup
                key={index}
                align={item.align || 'center'}
                verticalAlign={item.verticalAlign}
                fixed={item.fixed}
                width={item.width}
                header={item.title}
              >
                {/* TODO: 目前只支持两成嵌套 */}
                {item.columnChildren.map((citem: any) =>
                  baseColums(citem, index, 2),
                )}
              </ColumnGroup>
            );
          }
          return baseColums(item, index, 1);
        })}
      </Table>
    </div>
  );
};

export * from './types';

export default memo(ReactTable);
