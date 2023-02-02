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

行内编辑功能可通过 `render` 函数自行扩展，如下所示：

### 场景一

```jsx
import ReactTable, { TColumn } from '@vv-react-table/vv-react-table';
import React, { useState } from 'react';
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
      render: (row: Item, index) => {
        return (
          <input
            type="number"
            value={row.column2}
            onChange={(e) => {
              const t = [...tableData];
              t[index!].column2 = Number(e.target.value);
              setTableData(t);
            }}
          />
        );
      },
    },
    {
      title: '第三列',
      dataIndex: 'column3',
      minWidth: 100,
      align: 'center',
      render: (row: Item, index) => {
        return (
          <input
            type="number"
            value={row.column3}
            onChange={(e) => {
              const t = [...tableData];
              t[index!].column3 = Number(e.target.value);
              setTableData(t);
            }}
          />
        );
      },
    },
    {
      title: '第四列',
      dataIndex: 'column4',
      align: 'center',
      minWidth: 100,
    },
  ];
  const [tableData, setTableData] = useState([
    {
      column1: 1,
      column2: 2,
      column3: 3,
      column4: 4,
    },
    {
      column1: 11,
      column2: 22,
      column3: 33,
      column4: 44,
    },
  ]);

  return (
    <div className="App">
      <button
        style={{
          marginBottom: '10px',
          padding: '5px 8px',
          background: '#1677ff',
          color: '#fff',
          fontSize: '12px',
        }}
        onClick={() => alert(JSON.stringify(tableData))}
      >
        保存数据
      </button>

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

### 场景二

```jsx
import ReactTable, { TColumn } from '@vv-react-table/vv-react-table';
import React, { useState } from 'react';

function Dome() {
  const [editingRow, setEditingRow] = useState(new Map()); // 储存要编辑的行
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
      render: (row: Item, index) => {
        return editingRow.has(row.id) ? (
          <input
            type="number"
            value={row.column2}
            onChange={(e) => {
              const t = [...tableData];
              t[index!].column2 = Number(e.target.value);
              setTableData(t);
            }}
          />
        ) : (
          <span>{row.column2}</span>
        );
      },
    },
    {
      title: '第三列',
      dataIndex: 'column3',
      minWidth: 100,
      align: 'center',
      render: (row: Item, index) => {
        return editingRow.has(row.id) ? (
          <input
            type="number"
            value={row.column3}
            onChange={(e) => {
              const t = [...tableData];
              t[index!].column3 = Number(e.target.value);
              setTableData(t);
            }}
          />
        ) : (
          <span>{row.column3}</span>
        );
      },
    },
    {
      title: '第四列',
      dataIndex: 'column4',
      align: 'center',
      minWidth: 100,
    },
    {
      title: '操作',
      align: 'center',
      width: 200,
      render: (row: Item, index) => {
        return editingRow.has(row.id) ? (
          <div style={{ fontSize: '12px' }}>
            <span
              style={{ marginRight: '10px' }}
              onClick={() => {
                setEditingRow((map) => {
                  const newMap = new Map(map);
                  newMap.delete(row.id);
                  return newMap;
                });
              }}
            >
              保存
            </span>
            <span
              onClick={() => {
                const t = [...tableData];
                const oldRow = editingRow.get(row.id);
                t[index!] = oldRow;
                setTableData(t);
                setEditingRow((map) => {
                  const newMap = new Map(map);
                  newMap.delete(row.id);
                  return newMap;
                });
              }}
            >
              取消编辑
            </span>
          </div>
        ) : (
          <span
            style={{ fontSize: '12px' }}
            onClick={() =>
              setEditingRow((map) => new Map(map.set(row.id, row)))
            }
          >
            编辑
          </span>
        );
      },
    },
  ];
  const [tableData, setTableData] = useState([
    {
      column1: 1,
      column2: 2,
      column3: 3,
      column4: 4,
    },
    {
      column1: 11,
      column2: 22,
      column3: 33,
      column4: 44,
    },
  ]);

  return (
    <div className="App">
      <button
        style={{
          marginBottom: '10px',
          padding: '5px 8px',
          background: '#1677ff',
          color: '#fff',
          fontSize: '12px',
        }}
        onClick={() => alert(JSON.stringify(tableData))}
      >
        保存数据
      </button>

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

## 右键菜单

- 通过给 `table` 设置 `rightClickMenu` 来控制右键菜单的 `UI`
- 通过给 `colums` 设置 `contextMenu` 控制是否开启此列的右键菜单
- 如果 `colums` 设置 `rightClickMenu` 则会覆盖全局 `rightClickMenu`

> 右键菜单效果需点击下面“在独立页面打开”查看效果

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
      contextMenu: true,
    },

    {
      title: '第二列',
      dataIndex: 'column2',
      minWidth: 100,
      align: 'center',
      contextMenu: true,
    },
    {
      title: '第三列',
      dataIndex: 'column3',
      minWidth: 100,
      align: 'center',
      contextMenu: true,
    },
    {
      title: '自定义右键',
      dataIndex: 'column4',
      align: 'center',
      minWidth: 100,
      contextMenu: true,
      rightClickMenu: {
        render(row, index) {
          return (
            <div
              onClick={() => {
                alert(JSON.stringify(row));
              }}
              style={{
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              <div>我是自定义</div>
            </div>
          );
        },
      },
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
        rightClickMenu={{
          render(row, index) {
            return (
              <div
                onClick={() => {
                  alert(JSON.stringify(row));
                }}
                style={{
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                <div>第一列</div>
                <div>第二列</div>
                <div>第三列</div>
              </div>
            );
          },
        }}
      ></ReactTable>
    </div>
  );
}

export default Dome;
```

## 单独改变某一列样式

通过 `rowClassName` 可对某一行设置单独样式

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
        status: Math.random() > 0.5,
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
        rowClassName={(row) => {
          if (row && row.status) {
            return 'vv-bg-active';
          }
        }}
      ></ReactTable>
    </div>
  );
}

export default Dome;
```

## 改变行高度

- `rowHeight` 设置每一行高度
- `headerHeight` 设置表头高度

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
        rowHeight={20}
        headerHeight={30}
        bordered
        columns={columns}
        data={tableData}
      ></ReactTable>
    </div>
  );
}

export default Dome;
```
