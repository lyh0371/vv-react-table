import React, { useState } from 'react';
import { SortType } from 'rsuite-table';
import ReactTable, { TColumn } from './ReactTable';
function App() {
  const [sortColumn, setSortColumn] = React.useState('id');
  const [sortType, setSortType] = React.useState<SortType>('asc');
  const [editingRow, setEditingRow] = useState(new Map());
  type Item = {
    aaa: string;
    bbb: string;
    ccc: string;
    name: string;
    id: string;
  };

  const columns: TColumn<Item>[] = [
    {
      title: '价格工厂1',
      dataIndex: 'name',
      contextMenu: true,
      minWidth: 100,
      sortable: true,
      rowSpan: (rowData) => {
        return rowData.rowSpan;
      },
    },
    {
      title: '价格工厂2',
      contextMenu: true,
      dataIndex: 'bbb',
      minWidth: 100,
      render: (row: Item, index) => {
        return editingRow.has(row.id) ? (
          <input
            type="number"
            value={row.bbb}
            onChange={(e) => {
              const t = [...tableData];
              t[index!].bbb = Number(e.target.value);
              setTableData(t);
            }}
          />
        ) : (
          <span>{row.bbb}</span>
        );
      },
    },
    {
      title: '价格工厂3',
      dataIndex: 'bbb',
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
    {
      title: '工厂 title',
      dataIndex: 'aaa',
      minWidth: 100,
      columnChildren: [
        {
          title: '配方代码 child',
          dataIndex: 'ccc',
          minWidth: 100,
          contextMenu: true,
        },
        {
          title: '工厂 child',
          dataIndex: 'aaa',
          minWidth: 100,
          contextMenu: true,
        },
      ],
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

  // const tableData = useMemo(
  //   () =>
  //     new Array(4).fill(undefined).map((item, index) => ({
  //       aaa: 1,
  //       bbb: 2,
  //       ccc: 3,
  //       id: index.toString(),
  //     })),
  //   [columns],
  // );
  // setAaa(() => aaa.set(1, 1));

  const [tableData, setTableData] = useState([
    {
      aaa: 1,
      bbb: 2,
      ccc: 3,
      id: '1',
    },
    {
      aaa: 1,
      bbb: 2,
      ccc: 3,
      id: '2',
    },
    {
      rowSpan: 3,
      aaa: 111,
      bbb: 2222,
      name: 'a',
      ccc: 333,
      id: '22',
    },
    {
      aaa: 1,
      name: 'a',
      bbb: 2,
      ccc: 3,
      id: '3',
    },
    {
      aaa: 1,
      name: 'a',
      bbb: 2,
      ccc: 3,
      id: '4',
    },
    {
      aaa: 11,
      bbb: 22,
      ccc: 33,
      id: '5',
    },
  ]);

  return (
    <div className="App">
      {/* <button style={{ marginBottom: '10px',background:'#1677ff',color:'#fff' }} onClick={()=>alert(JSON.stringify())}>保存数据</button> */}
      <ReactTable
        sortType={sortType}
        sortColumn={sortColumn}
        onSortColumn={(sortColumn, sortType) => {
          console.log(sortColumn, sortType);
          sortType && setSortType(sortType);
          setSortColumn(sortColumn);
        }}
        rowSelection={{
          key: 'id',
          type: 'checkbox',
          onChange: (ids, rows, id, row) => {
            console.log('ids', ids);
            console.log('rows', rows);
            console.log('id', id);
            console.log('row', row);
          },
        }}
        renderTreeToggle={(icon, rowData: any) => {
          if (rowData.children && rowData.children.length === 0) {
            return 'loading';
          }
          return icon;
        }}
        height={600}
        headerHeight={60}
        rowHeight={30}
        bordered
        dbClickFull
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
        columns={columns}
        data={tableData}
      ></ReactTable>
    </div>
  );
}

export default App;
