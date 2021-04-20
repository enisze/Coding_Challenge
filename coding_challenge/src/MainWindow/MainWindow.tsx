import React from "react";
import { DashboardLayout } from "../Components/DashboardLayout";
import { ItemText } from "../Components/StyledComponents";

export const MainWindow: React.FC = (props) => {
  return (
    <DashboardLayout>
      <div style={{ paddingBottom: "2rem", paddingTop: "1rem" }}>Welcome, </div>
      <div style={{ paddingBottom: "2rem" }}>
        on this page you can browse
        <div>the Characters and Episodes</div>
        <div>of Rick and Morty.</div>
      </div>
      <div>Enjoy!</div>
    </DashboardLayout>
  );
};
