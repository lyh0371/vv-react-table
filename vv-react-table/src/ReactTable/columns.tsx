import { Cell, Column, HeaderCell } from 'rsuite-table';
import { columnsType } from './types';
import { columnProps } from './props';

const TableColumns = (columns: columnsType[]) => {
  return (
    <>
      {columns
        .filter((item) => !item.hidden)
        .map((item, index) => {
          console.log({ ...columnProps(item) });

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
        })}
    </>
  );
};
export default TableColumns;
