import React, { useState } from "react";
import "./index.css";
import Course from "../course";
import Session from "../session";
import Content from "../content";
import { Divider } from "antd";


export default function CourseIndex() {
  const [tabIndex, setTabIndex] = useState(1);
  // Khi click thì chuyển tab
  const handleChangeTab = (currentTab) => {
    setTabIndex(currentTab);
  };

  const tabs = [
    {
      id: 1,
      label: "Quản lý khóa học",
      children: <Course />,
    },
    {
      id: 2,
      label: "Quản lý bài học",
      children: <Session />,
    },
    {
      id: 3,
      label: "Quản lý nội dung",
      children: <Content />,
    },
  ];
  return (
    <>
      <div className="px-6 py-3 flex flex-col  w-full">
        <ul className="flex items-center gap-2" id="tab">
          {tabs.map((tab, index) => (
            <div key={index}>
              <li
                onClick={() => handleChangeTab(tab.id)}
                className={`px-3 py-2 cursor-pointer hover:bg-[#F5F5F5] rounded ${
                  tabIndex === tab.id ? "active" : ""
                }`}
                key={tab.id}
              >
                {tab.label}
              </li>
            </div>
          ))}
        </ul>
        <Divider />
        <div>
          {tabIndex === 1 ? (
            <Course />
          ) : tabIndex === 2 ? (
            <Session />
          ) : (
            <Content />
          )}
        </div>
      </div>
    </>
  );
}
