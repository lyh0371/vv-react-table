# 示例

## 基础用法

通过 `data` 设置表格的数据源，通过 `columns` 设置表格的列即可得到一个表格

```jsx
import ReactTable, { TColumn } from '@vv-react-table/vv-react-table';
import React, { useMemo } from 'react';
function Dome() {
  type Item = {
    column1: string,
    column2: string,
    column3: string,
    column4: string,
  };

  const columns: TColumn<Item>[] = [
    {
      title: '第一列',
      dataIndex: 'column1',
      minWidth: 100,
      align: 'center',
    },

    {
      title: '第二列',
      dataIndex: 'column2',
      minWidth: 100,
      align: 'center',
    },
    {
      title: '第三列',
      dataIndex: 'column3',
      minWidth: 100,
      align: 'center',
    },
    {
      title: '第四列',
      dataIndex: 'column4',
      align: 'center',
      minWidth: 100,
    },
  ];

  const tableData = useMemo(
    () =>
      new Array(100).fill(undefined).map((item, index) => ({
        column1: 1,
        column2: 2,
        column3: 3,
        column4: 4,
      })),
    [columns],
  );

  return (
    <div className="App">
      <ReactTable
        height={300}
        bordered
        columns={columns}
        data={tableData}
      ></ReactTable>
    </div>
  );
}

export default Dome;
```

## 可选择

设置 `rowSelection` 使表格可被配置，配置 `type = checkbox | radio` 支持多选/单选

**设置 `rowSelection` 需要给列表配置唯一标识 通过 key 进行配置**

```jsx
import ReactTable, { TColumn } from '@vv-react-table/vv-react-table';
import React, { useMemo } from 'react';
function Dome() {
  type Item = {
    column1: string,
    column2: string,
    column3: string,
    column4: string,
  };

  const columns: TColumn<Item>[] = [
    {
      title: '第一列',
      dataIndex: 'column1',
      minWidth: 100,
      align: 'center',
    },

    {
      title: '第二列',
      dataIndex: 'column2',
      minWidth: 100,
      align: 'center',
    },
    {
      title: '第三列',
      dataIndex: 'column3',
      minWidth: 100,
      align: 'center',
    },
    {
      title: '第四列',
      dataIndex: 'column4',
      align: 'center',
      minWidth: 100,
    },
  ];

  const tableData = useMemo(
    () =>
      new Array(100).fill(undefined).map((item, index) => ({
        column1: 1,
        column2: 2,
        column3: 3,
        column4: 4,
        id: index.toString(), // 唯一标识
      })),
    [columns],
  );

  return (
    <div className="App">
      <ReactTable
        rowSelection={{
          key: 'id', //对应 tableData中的id
          type: 'checkbox',
          onChange: (ids, rows, id, row) => {
            console.log('ids', ids);
            console.log('rows', rows);
            console.log('id', id);
            console.log('row', row);
          },
        }}
        height={300}
        bordered
        columns={columns}
        data={tableData}
      ></ReactTable>
    </div>
  );
}

export default Dome;
```

## 固定列

## 合并头部

## 合并列

## 列宽拖拽

## 双击头部放大

## 行内编辑

## 右键菜单
