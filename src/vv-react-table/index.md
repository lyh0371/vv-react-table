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

给某一列配置 `fixed` 属性可实现固定列，支持 `right | left` 固定到 ` 右边 | 左边`

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
      width: 100,
      align: 'center',
      fixed: 'left',
    },

    {
      title: '第二列',
      dataIndex: 'column2',
      width: 300,
      align: 'center',
    },
    {
      title: '第三列',
      dataIndex: 'column3',
      width: 300,
      align: 'center',
    },
    {
      title: '第四列',
      dataIndex: 'column4',
      align: 'center',
      width: 300,
    },
    {
      title: '第五列',
      dataIndex: 'column5',
      align: 'center',
      width: 300,
    },
    {
      title: '第六列',
      dataIndex: 'column6',
      align: 'center',
      width: 100,
      fixed: 'right',
    },
  ];

  const tableData = useMemo(
    () =>
      new Array(100).fill(undefined).map((item, index) => ({
        column1: 1,
        column2: 2,
        column3: 3,
        column4: 4,
        column5: 5,
        column6: 6,
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

## 合并头部

通过配置 `columnChildren` 即可实现

```jsx
import ReactTable, { TColumn } from '@vv-react-table/vv-react-table';
import React, { useMemo } from 'react';
function Dome() {
  type Item = {
    column1: string,
    column2: string,
    column3: string,
    column4: string,
    column2_1: string,
    column2_2: string,
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
      columnChildren: [
        {
          title: '第二列_1',
          dataIndex: 'column2_1',
          minWidth: 100,
        },
        {
          title: '第二列_2',
          dataIndex: 'column2_2',
          minWidth: 100,
        },
      ],
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
    {
      title: '第五列',
      dataIndex: 'column5',
      align: 'center',
      minWidth: 100,
    },
    {
      title: '第六列',
      dataIndex: 'column6',
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
        column5: 5,
        column6: 6,
        column2_1: '2_1',
        column2_2: '2_2',
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

## 合并列

1. 在 `columns`中某一列配置 `rowSpan: (rowData) => {
  return rowData.rowSpan;
}`说明合并行在哪一列发生

2. 通过给 `data` 配置 `rowSpan` 来控制要合并几行

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
      rowSpan: (rowData) => {
        return rowData.rowSpan;
      },
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

  const tableData = [
    {
      column1: 1,
      column2: 2,
      column3: 3,
      column4: 4,
    },
    {
      column1: 1,
      column2: 2,
      column3: 3,
      column4: 4,
      rowSpan: 2,
    },
    {
      column1: 1,
      column2: 2,
      column3: 3,
      column4: 4,
    },
    {
      column1: 1,
      column2: 2,
      column3: 3,
      column4: 4,
    },
    {
      column1: 1,
      column2: 2,
      column3: 3,
      column4: 4,
    },
  ];

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

## 列宽拖拽

给 `columns` 配置 `resizable=true` 即可支持列宽拖拽。**列宽拖拽需要配置固定宽度**`width`

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
      width: 200,
      resizable: true,
      align: 'center',
    },

    {
      title: '第二列',
      dataIndex: 'column2',
      width: 200,
      resizable: true,
      align: 'center',
    },
    {
      title: '第三列',
      dataIndex: 'column3',
      width: 200,
      resizable: true,
      align: 'center',
    },
    {
      title: '第四列',
      dataIndex: 'column4',
      align: 'center',
      width: 200,
      resizable: true,
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

## 双击头部放大

设置 `dbClickFull`

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
        dbClickFull
        columns={columns}
        data={tableData}
      ></ReactTable>
    </div>
  );
}

export default Dome;
```

## 行内编辑

## 右键菜单
