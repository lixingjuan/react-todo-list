import React, { useState } from "react";
import moment from "moment";
import { DatePicker, TimePicker, Select, Space } from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

enum PickType {
  DAY = "date",
  YEAR = "year",
  MONTH = "month"
}

export default function SwitchablePicker() {
  const [type, setType] = useState("YEAR");

  const disabledDate = current => {
    return current && current > moment().endOf(PickType[type]);
  };

  return (
    <>
      <Space>
        <Select value={type} onChange={val => setType(val)}>
          <Option value="YEAR">年</Option>
          <Option value="MONTH">月</Option>
          <Option value="DAY">日</Option>
        </Select>
        <RangePicker
          picker={PickType[type]}
          // format={`${type}Format`}
          onChange={(data, dataString) => {
            //发起查询，获得新的图片
            console.log({ dataString });
          }}
          disabledDate={disabledDate}
        />
      </Space>
    </>
  );
}
