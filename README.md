# The virtualized table component for AntD4，fast and restorable.


![npm](https://img.shields.io/npm/v/virtualizedtableforantd4)
![dm](https://img.shields.io/npm/dm/virtualizedtableforantd4)
![license](https://img.shields.io/npm/l/virtualizedtableforantd4)


[![NPM](https://nodei.co/npm/virtualizedtableforantd4.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/virtualizedtableforantd4/)

+ Install

  ```shell
  npm i --save virtualizedtableforantd4
  ```

+ the opts of `useVT`([examples](https://github.com/wubostc/virtualized-table-for-antd/blob/master/test))
  ```typescript
  export interface vt_opts<RecordType> {
      id?: number;
      /**
      * @default 5
      */
      overscanRowCount?: number;
      /**
      * this only needs the scroll.y
      */
      scroll: RcTableProps<RecordType>['scroll'];
      /**
      * wheel event(only works on native events).
      * 滚轮事件（只对原生事件有效）。
      */
      onScroll?: ({ left, top, isEnd, }: {
          top: number;
          left: number;
          isEnd: boolean;
      }) => void;
      initTop?: number;
      /**
      * @default false
      */
      debug?: boolean;
  }
  ```


+ Quick start
  > You need to change your style like following if your Table.size is not default.
  
  > 如果你的Table.size不是默认的话，你需要修改像下面一样的style。

  ```less
  // size={'small'}
  ant-table [vt] > table > .ant-table-tbody > tr > td {
      padding: 8px;
  }
  ```
  ```typescript
  import React from 'react';
  import { Table } from 'antd';
  import { useVT } from 'virtualedtableforantd4';

  const [ vt, set_components ] = useVT(() => ({ scroll: { y: 600 } }), []);

  <Table
    scroll={{ y: 600 }} // It's important for using VT!!! DO NOT FORGET!!!
    components={vt}
    columns={/*your columns*/}
    dataSource={/*your data*/}
  />
  ```


+ Restoring last state

  - [reload](https://github.com/wubostc/virtualized-table-for-antd/blob/master/test/reload.tsx)


+ Editable Table

  - [CustomRows Hooks](https://github.com/wubostc/virtualized-table-for-antd/blob/master/test/CustomRows%20Hooks.jsx)
  - [Editable Rows](https://github.com/wubostc/virtualized-table-for-antd/blob/master/test/Editable%20Rows.jsx)

+ Drag soring

  - [Drag soring](https://github.com/wubostc/virtualized-table-for-antd/blob/master/test/Drag%20soring.jsx)

## License

[MIT](LICENSE)