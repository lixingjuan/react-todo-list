import React, { useState, useCallback } from "react";
import { Table } from "antd";
import { Resizable } from "react-resizable";

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
  }
];

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

function Demo() {
  const [columns, setColumns] = useState(initColumns);

  const components = {
    header: {
      cell: ResizableTitle
    }
  };

  const handleResize = useCallback(
    index => (e, { size }) => {
      console.log(index);
      console.log(e);
      console.log(size);
      const tempColumns = [...columns];
      tempColumns[index] = {
        ...tempColumns[index],
        width: size.width
      };
      setColumns(tempColumns);
    },
    []
  );

  const columnsComp = columns.map((col, index) => ({
    ...col,
    onHeaderCell: column => ({
      width: column.width,
      onResize: index => (e, { size }) => {
        // const tempColumns = [...columns];
        // tempColumns[index] = {
        //   ...tempColumns[index],
        //   width: size.width
        // };
        return { width: size.width };
        // setColumns(tempColumns);
      }
      // onResize: handleResize(index)
    })
  }));

  return (
    <Table
      bordered
      components={components}
      columns={columnsComp}
      dataSource={initData}
    />
  );
}

export default Demo;
