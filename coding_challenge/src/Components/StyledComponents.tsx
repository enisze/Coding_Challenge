import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import { toggleFavourites } from "../Helpers/toggleFavourites";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

export const Button = styled.button`
  height: 2rem;
`;

export const BackButton: React.FC<{ goBack: () => void }> = (props) => {
  const { goBack } = props;
  return (
    <div style={{ paddingBottom: "1rem" }}>
      <Button onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
    </div>
  );
};

export const PreviousButton: React.FC<{ previous: () => void }> = (props) => {
  const { previous } = props;
  return (
    <IconDiv onClick={previous} style={{ paddingRight: "1rem" }}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </IconDiv>
  );
};

export const NextButton: React.FC<{ next: () => void }> = (props) => {
  const { next } = props;
  return (
    <IconDiv onClick={next} style={{ paddingLeft: "1rem" }}>
      <FontAwesomeIcon icon={faChevronRight} />
    </IconDiv>
  );
};

export const LinkButton: React.FC<{ path: string }> = (props) => {
  const { path } = props;
  return (
    <Link to={{ pathname: path }} style={{ paddingLeft: "1rem" }}>
      <Button> Show Details</Button>
    </Link>
  );
};

export const FavouriteButton: React.FC<{ id: number }> = (props) => {
  const { id } = props;
  const appContext = useContext(AppContext);
  const favourites = appContext.favourites;
  const onClick = async (id: number) => {
    appContext.setFavourites(await toggleFavourites(id));
  };

  return (
    <IconDiv
      onClick={() => {
        onClick(id);
      }}
      style={{ paddingLeft: "1rem" }}
    >
      <FontAwesomeIcon
        icon={favourites.includes(id) ? faHeart : regularHeart}
      />
    </IconDiv>
  );
};

export const IconDiv = styled.div`
  cursor: pointer;
`;
export const ItemText = styled.div``;
export const HeaderText = styled.div`
  font-weight: bold;
  padding-bottom: 1rem;
`;
export const ContainerDiv = styled.div`
  display: flex;
`;
export const SidebarDiv = styled.div`
  width: 10rem;
`;
export const ItemsDiv = styled.div`
  width: 85%;
  padding-left: 1rem;
`;
