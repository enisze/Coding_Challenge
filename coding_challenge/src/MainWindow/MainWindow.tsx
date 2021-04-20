import React from "react";
import { DashboardLayout } from "../Components/DashboardLayout";

export const MainWindow: React.FC = (props) => {
  return (
    <DashboardLayout>
      <div>Welcome, 
        on this page you can browse the Characters and Episodes of Rick and Morty.

        Enjoy!
      </div>
    </DashboardLayout>
  );
};
