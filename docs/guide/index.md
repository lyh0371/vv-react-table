---
nav:
  title: 指南
  order: -1
group:
  title: 介绍
  order: -1
---

# 什么是 vv-react-table

vv-react-table 是一款基于 [rsuite-table](https://github.com/rsuite/rsuite-table)二次封装的虚拟表格组件。支持通过 JSON 配置生成虚拟表格，并对 `rsuite-table` 进行了扩展

## 功能

vv-react-table 主要支持以下功能：

- 🚀 **表格宽度拖拽** 需设置固定宽度即可实现宽度拖拽
- 🔍 **拖拽行和列**：表格行和列可自由拖拽
- 🎨 **右键菜单**：支持给每一列单独设置右键菜单，右键菜单样式可自定义
- 🚥 **表头及列的合并**：通过简单配置即可时间表头和列的合并
- 💡 **行内编辑**：对行内元素进行编辑
- 💎 更多高级用法请看[示例](/components/vv-react-table)

## 使用

1. 下载依赖

```shell

npm install vv-react-table -S
# or
yarn add vv-react-table -S
# or
pnpm install vv-react-table -S

```

2. 引入组件及样式

```js
import ReactTable from 'vv-react-table';
import 'vv-react-table/index.esm.css';
```

> 未了支持 ESM 实现大统，`vv-react-table` 只支持 ESM 规范

## 问题反馈

如果在使用过程中发现任何问题、或者有改善建议，欢迎在 GitHub Issues 进行反馈：https://github.com/lyh0371/vv-react-table/issues

或加我微信(lyh1347635797)直接反馈（加微信请备注虚拟表格）：

<div>
  <img  src="/rwm.jpeg" width="300" />
</div>
