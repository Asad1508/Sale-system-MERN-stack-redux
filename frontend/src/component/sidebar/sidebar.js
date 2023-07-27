import React from "react";
import './sidebar.css'
import { FcSalesPerformance } from "react-icons/fc";
import { FcCalculator } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcElectroDevices } from "react-icons/fc";
import { FcAddRow } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
const Sidebar = ({ activeSidebar }) => {
  return (
    <div>
      <div id="sidebar" className={activeSidebar ? "active" : ""}>
        <div className="logo">
          <a href="/">Sale system | Ishaq Paints</a>
        </div>
        <div className="nav">
          <a href="/dashboard"><FcSalesPerformance/> Dashboard</a>
          <a href="/pos"><FcCalculator/> Point of sale</a>
          <a href="/salereport"><FcBullish/> Sales report</a>
          <a href="/category"><FcElectroDevices/> Manage category</a>
          <a href="/createproduct"><FcAddRow/> Add product</a>
          <a href="/products"><FcTodoList/>Product List</a>
          <a href="/logout"><FcManager/> Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
