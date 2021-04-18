import Icon from "awesome-react-icons";
import React, { useState } from "react";
import { Navigation } from "react-minimal-side-navigation/lib";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { useHistory, useLocation } from "react-router-dom";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      <div>
        <div>Rick and Morty Overview</div>

        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Episodes",
              itemId: "/episodes",
              elemBefore: () => <Icon name="coffee" />,
            },
            {
              title: "Characters",
              itemId: "/characters",
              elemBefore: () => <Icon name="user" />,
            },
          ]}
        />
      </div>
    </React.Fragment>
  );
};
