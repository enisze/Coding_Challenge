import React from "react";
import { NavSidebar } from "./Navigation";
import { ContainerDiv, ItemsDiv, SidebarDiv } from "./StyledComponents";

export const DashboardLayout: React.FC = (props) => {
  return (
    <ContainerDiv>
      <SidebarDiv>
        <NavSidebar />
      </SidebarDiv>
      <ItemsDiv>{props.children}</ItemsDiv>
    </ContainerDiv>
  );
};
