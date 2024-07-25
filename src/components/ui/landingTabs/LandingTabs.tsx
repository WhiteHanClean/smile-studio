import React from "react";
import s from "./LandingTabs.module.scss";
import { Tabs, TabsProps } from "antd";

interface tabsPorps {
    onChange?: (key: string) => void;
    items?: TabsProps["items"];
}

const LandingTabs = ({onChange, items}: tabsPorps) => {
  return (
    <div className={s.tabs}>
      <Tabs  defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default LandingTabs;
