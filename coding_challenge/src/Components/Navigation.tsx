import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Navigation } from "react-minimal-side-navigation/lib";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { useHistory, useLocation } from "react-router-dom";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();

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
              elemBefore: () => <FontAwesomeIcon icon={faFilm} />,
            },
            {
              title: "Characters",
              itemId: "/characters",
              elemBefore: () => <FontAwesomeIcon icon={faUser} />,
            },
          ]}
        />
      </div>
    </React.Fragment>
  );
};
