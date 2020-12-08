import React, { useState, useCallback, useMemo } from "react";
import { Table, Button, Row, Col } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import ReactDragListView from "react-drag-listview";
import { Resizable } from "react-resizable";
// import { DragColumn } from "../../packages/resize-antd-table/src";



const initData = [
  {
    key: 0,
    date: "2018-02-11",
    amount: 120,
    type: "income",
    note: "transfer"
  },
  {
    key: 1,
    date: "2018-03-11",
    amount: 243,
    type: "income",
    note: "transfer"
  },
  {
    key: 2,
    date: "2018-04-11",
    amount: 98,
    type: "income",
    note: "transfer"
  }
];


const ResizableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  console.log({ restProps });
  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={e => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps}>
       <Row justify="space-between" align="middle">
          <Col span={20}>{restProps.children}</Col>
          <Col span={4} className="drag-button"><MenuOutlined/></Col>
        </Row>
      </th>
    </Resizable>
  );
};

function Demo() {
  const initColumns = [
    {
      title: "Date",
      dataIndex: "date",
      width: 200
    },
    {
      title: "Amount",
      dataIndex: "amount",
      width: 100,
      sorter: (a, b) => a.amount - b.amount
    },
    {
      title: "Type",
      dataIndex: "type",
      width: 100
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <a>Delete</a>,
    },
  ];

  const [columns, setColumns] = useState(initColumns);
  const [data, setData] = useState(initData);

  const components = {
    header: {
      cell: ResizableTitle
    }
  };

  const dragProps = {
    onDragEnd(fromIndex, toIndex) {
      const tempArr = [...columns];

      [tempArr[fromIndex], tempArr[toIndex]] = [
        tempArr[toIndex],
        tempArr[fromIndex]
      ];
      setColumns(tempArr);
    },
    nodeSelector: "th",
    handleSelector: ".drag-button",
  };

  const handleResize = useCallback(
    index => (e, { size }) => {
      const tempColumns = [...columns];
      tempColumns[index] = {
        ...tempColumns[index],
        width: size.width
      };
      setColumns(tempColumns);
    },
    [columns]
  );

  const columnsComp = useMemo(() => {
    const resColumns = columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: handleResize(index)
      })
    }));
    return resColumns
  }, [columns, handleResize])

  return (
    <div style={{ margin: 20 }}>
      <ReactDragListView.DragColumn {...dragProps}>
        <Table
          bordered
          columns={columnsComp}
          pagination={false}
          components={components}
          dataSource={data}
        />
      </ReactDragListView.DragColumn>
    </div>
  );
}

export default Demo;
