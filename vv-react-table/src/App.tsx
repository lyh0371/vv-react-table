import React from 'react';
import { SortType } from 'rsuite-table';
import ReactTable, { TColumn } from './ReactTable';
function App() {
  const [sortColumn, setSortColumn] = React.useState('id');
  const [sortType, setSortType] = React.useState<SortType>('asc');
  type Item = {
    aaa: string;
    bbb: string;
    ccc: string;
    name: string;
  };

  const columns: TColumn<Item>[] = [
    {
      title: '价格工厂1',
      dataIndex: 'name',
      minWidth: 100,
      sortable: true,
      rowSpan: (rowData) => {
        return rowData.rowSpan;
      },
    },
    {
      title: '价格工厂2',
      dataIndex: 'bbb',
      minWidth: 100,
    },
    {
      title: '价格工厂3',
      dataIndex: 'bbb',
      minWidth: 100,
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

  const tableData = [
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
  ];

  return (
    <div className="App">
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
        columns={columns}
        data={tableData}
      ></ReactTable>
    </div>
  );
}

export default App;
