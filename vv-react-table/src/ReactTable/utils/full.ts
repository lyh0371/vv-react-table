/**
 * @name 使table全屏
 * @param target table DOM
 */

export const fullCore = (target: HTMLDivElement) => {
  const className = 'vv-table-isFull';
  // 判断是不是全屏状态
  const tableStatus = target.classList.contains(className);

  if (!tableStatus) {
    // 放大
    target.classList.add(className);
  } else {
    target.classList.remove(className);
  }
};
