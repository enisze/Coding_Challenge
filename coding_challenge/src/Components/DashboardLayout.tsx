import React from "react";
import { NavSidebar } from "./Navigation";

export const DashboardLayout: React.FC = (props) => {
  return (
    <div>
      <NavSidebar />
      {props.children}
    </div>
  );
};
