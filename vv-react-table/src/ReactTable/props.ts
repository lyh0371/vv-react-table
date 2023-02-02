import { cloneDeep } from 'lodash';

import { columnsType, ReactTableType } from './types';

export const columnProps = (props: columnsType) => {
  type itemType = Partial<columnsType>;
  const propsItem: itemType = cloneDeep(props);
  delete propsItem.dataIndex;
  delete propsItem.title;
  delete propsItem.render;
  delete propsItem.rightClickMenu;
  delete propsItem.contextMenu;

  return propsItem;
};

export const tableProps = (props: ReactTableType) => {
  type propsType = Partial<ReactTableType>;
  const propsItem: propsType = cloneDeep(props);
  delete propsItem.columns;
  delete propsItem.rowSelection;
  delete propsItem.dbClickFull;
  delete propsItem.rightClickMenu;
  return propsItem;
};
