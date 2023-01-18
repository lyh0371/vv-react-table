import { useMemo } from 'react';
import ReactTable, { TColumn } from './ReactTable';
function App() {
  type Item = {
    aaa: string;
    bbb: string;
    ccc: string;
  };

  const columns: TColumn<Item>[] = [
    {
      title: '工厂 title',
      dataIndex: 'aaa',
      minWidth: 100,
      columnChildren: [
        {
          title: '配方代码 child',
          dataIndex: 'ccc',
          minWidth: 100,
        },
        {
          title: '工厂 child',
          dataIndex: 'aaa',
          minWidth: 100,
        },
      ],
    },
    {
      title: '价格工厂',
      dataIndex: 'bbb',
      minWidth: 100,
    },
  ];

  const tableData = useMemo(
    () =>
      new Array(4).fill(undefined).map((item, index) => ({
        aaa: 1,
        bbb: 2,
        ccc: 3,
        id: index.toString(),
      })),
    [columns],
  );

  return (
    <div className="App">
      <ReactTable
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
        columns={columns}
        data={tableData}
      ></ReactTable>
    </div>
  );
}

export default App;
