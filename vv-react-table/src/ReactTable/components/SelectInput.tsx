import { useUpdateEffect } from 'ahooks';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { Cell, Column, HeaderCell, RowDataType } from 'rsuite-table';
import { RowSelection } from '../types';
import { errorLog } from '../utils';
const SelectInput: React.FC<{ rowSelection: RowSelection; data: RowDataType[] }> = ({
  rowSelection: { width = 30, type = 'checkbox', fixed = 'left', key = 'id', onChange },
  data,
}) => {
  const [ids, setIds] = useState<string[]>([]);
  const keyId = useRef<string | undefined>('');
  const rowItem = useRef<Obj>({});
  const inputChange = (e: React.ChangeEvent, rowData: Obj) => {
    if (rowData[key] === undefined) {
      errorLog(`data里需要包含${key}`);
      return false;
    }
    const checked = (e.target as HTMLInputElement).checked;
    const id = rowData[key];
    if (checked) {
      setIds([...ids, id]);
      rowItem.current = rowData;
    } else {
      setIds((ids) => ids.filter((idItem) => idItem != id));
      console.log(rowData);
      rowItem.current = {};
    }
    keyId.current = id;
  };

  // 点击全选按钮执行
  const allInputChange = (e: React.ChangeEvent) => {
    const checked = (e.target as HTMLInputElement).checked;
    // 全选了
    if (checked) {
      setIds(() =>
        data.map((item) => {
          return item[key];
        })
      );
    } else {
      // 不全选
      setIds([]);
    }
    keyId.current = undefined;
    rowItem.current = {};
  };

  useUpdateEffect(() => {
    const rows = data.filter((item: Obj) => ids.includes(item[key]));
    onChange(ids, rows, keyId.current, rowItem.current);
  }, [ids]);

  return (
    <Column width={width} fixed={fixed ? 'left' : undefined}>
      <HeaderCell>
        {type === 'checkbox' && (
          <input type={type} checked={data.length === ids.length} onChange={(e) => allInputChange(e)} />
        )}
      </HeaderCell>
      <Cell>
        {(rowData) => {
          return (
            <input
              type={type}
              name={type === 'radio' ? 'radio' : undefined}
              checked={ids.some((id) => id === rowData[key])}
              onChange={(e) => inputChange(e, rowData)}
            />
          );
        }}
      </Cell>
    </Column>
  );
};

export default SelectInput;
