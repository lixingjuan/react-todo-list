import React, { useState } from "react";
import { Table } from "antd";
import ReactDragListView from "react-drag-listview";
// import { DragColumn } from "../../packages/resize-antd-table/src";
import { Resizable } from "react-resizable";

const initData = [
  {
    key: "1",
    name: "Boran",
    gender: "male",
    age: "12",
    address: "New York"
  },
  {
    key: "2",
    name: "JayChou",
    gender: "male",
    age: "38",
    address: "TaiWan"
  },
  {
    key: "3",
    name: "Lee",
    gender: "female",
    age: "22",
    address: "BeiJing"
  },
  {
    key: "4",
    name: "ChouTan",
    gender: "male",
    age: "31",
    address: "HangZhou"
  },
  {
    key: "5",
    name: "AiTing",
    gender: "female",
    age: "22",
    address: "Xi’An"
  }
];

const initColumns = [
  {
    title: "Key",
    dataIndex: "key"
  },
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Gender",
    dataIndex: "gender"
  },
  {
    title: "Age",
    dataIndex: "age"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const ResizableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

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
      <th {...restProps} />
    </Resizable>
  );
};

function Demo() {
  const [data, setData] = useState(initData);
  const [columns, setColumns] = useState(initColumns);

  const dragProps = {
    onDragEnd(fromIndex, toIndex) {
      const tempArr = [...columns];

      [tempArr[fromIndex], tempArr[toIndex]] = [
        tempArr[toIndex],
        tempArr[fromIndex]
      ];

      setColumns(tempArr);
    },
    nodeSelector: "th"
  };

  return (
    <div style={{ margin: 20 }}>
      <h2>Table column with dragging</h2>
      <ReactDragListView.DragColumn {...dragProps}>
        <Table
          columns={columns}
          pagination={false}
          dataSource={data}
          // components={components}
          bordered
        />
      </ReactDragListView.DragColumn>
    </div>
  );
}

export default Demo;
