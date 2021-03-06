/**
 * copy this file to your working directory.
 */
import React, { useState, useMemo, useCallback, useRef, useContext, useEffect, } from 'react';
import { Table, Button } from 'antd';
import { useVT } from 'virtualizedtableforantd';
import { Switch as RouteSwitch, Route, NavLink } from 'react-router-dom';




function Table1({ ctx }: { ctx: any} ) {
  
  const _data = useMemo(() => {
    const data: any[] = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: (`London Park no. ${i}`),
      });
    }
    return data;
  }, []);


  const [data, setData] = useState([]);


  // Column name age 1 2 3 4 5 6 7 8 operation
  const _columns: any = useMemo(() => [
    {
      title: 'Full Name',
      width: 150,
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => {
        return <NavLink to={"/users"}>{text}</NavLink>
      },
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 170,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 180,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 190,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',

    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },

  ], []);


  const [vt] = useVT(() => {
    return {
      initTop: ctx.top,
      onScroll: ({ top }) => ctx.top = top,
      scroll: { y: 500 },
      debug: true,
    }
  }, [ctx.top]);

  useEffect(() => {
    setTimeout(() => {
      window.alert('fetching the data...');
      setData(_data);
    }, 50);
  }, []);


  return (
    <>
      <Button onClick={() => setData([])}>{"clear data"}</Button>
      <Button onClick={() => setData(_data)}>{"load data"}</Button>
      

      <br />
      <br />


      <Table
        style={{ width: 1500 }}
        columns={_columns}
        dataSource={data}
        scroll={{ y: 500, x: 1500 }}
        components={vt}
        pagination={false}
      >
      </Table>
    </>
  );
}


export default function Reload() {

  const ctx = useRef({ top: 0 });

  return (
    <RouteSwitch>
      <Route exact path={"/users"} render={() => {
        return (
          <>
            <NavLink to={"/"}><h2>go home</h2></NavLink>
            <div>Mr. Huggins</div>
          </>
        )
      }}></Route>
      <Route exact path={"/"} render={() => <Table1 ctx={ctx.current} />}></Route>
    </RouteSwitch>
  )
}