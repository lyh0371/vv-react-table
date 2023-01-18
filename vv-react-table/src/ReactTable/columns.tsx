import { Cell, Column, ColumnGroup, HeaderCell } from 'rsuite-table';
import { columnProps } from './props';
import { columnsType } from './types';

const TableColumns = (columns: columnsType[]) => {
  const baseColums = (item: columnsType, index: number) => {
    return (
      <Column key={index} {...columnProps(item)}>
        <HeaderCell> {item.title} </HeaderCell>
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
  };

  return (
    <>
      {columns
        .filter((item) => !item.hidden)
        .map((item, index) => {
          console.log(item.columnChildren);

          if (item.columnChildren) {
            return (
              <ColumnGroup
                align={item.align}
                verticalAlign={item.verticalAlign}
                fixed={item.fixed}
                groupHeaderHeight={item.groupHeaderHeight}
                width={item.width}
              >
                {item.columnChildren.map((citem: any) =>
                  baseColums(citem, index),
                )}
              </ColumnGroup>
            );
          }
          return baseColums(item, index);
        })}
    </>
  );
};
export default TableColumns;
