import React from 'react';
import ReactDOM from 'react-dom/client';
import { RowDataType } from 'rsuite-table';
import { columnsType } from '../types';
import { errorLog } from './log';

const onContextMenu = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  rowData: RowDataType,
  index: number,
  item: columnsType,
  rightClickMenu?: {
    render: (row: any, index: number) => React.ReactNode;
  },
) => {
  if (item.contextMenu) {
    // 说明开启了右键菜单

    // 先关闭所有的右键菜单
    const vvMenu = document.querySelector('#vv-menu') as HTMLDivElement;
    if (vvMenu) {
      vvMenu.style.display = 'none';
      document.body.removeChild(vvMenu);
    }
    const divWarp = document.createElement('div');
    divWarp.style.position = 'absolute';
    divWarp.setAttribute('id', 'vv-menu');
    divWarp.style.zIndex = '1000';
    divWarp.style.top = `${e.clientY}px`;
    divWarp.style.left = `${e.clientX}px`;
    divWarp.style.background = '#fff';
    divWarp.style.boxShadow = '1px 1px 10px #ccc';
    document.body.appendChild(divWarp);

    let renderDome = rightClickMenu?.render(rowData, index);
    if (item.rightClickMenu) {
      if (!item.rightClickMenu.render) {
        errorLog('请提供 render函数');
        return false;
      }
      renderDome = item.rightClickMenu?.render(rowData, index);
    }
    ReactDOM.createRoot(divWarp as HTMLElement).render(renderDome);
    document.body.addEventListener('click', (e) => {
      const vvMenu = document.querySelector('#vv-menu') as HTMLDivElement;
      if (vvMenu) {
        vvMenu.style.display = 'none';
        document.body.removeChild(vvMenu);
      }
    });

    e.preventDefault();
  }
};

export default onContextMenu;
