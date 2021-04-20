import React from "react";
import { ContainerDiv, NextButton, PreviousButton } from "./StyledComponents";

export const PageNavigation: React.FC<{
  setPage: (num: number) => void;
  page: number;
  max_pages: number;
}> = (props) => {
  const { page, setPage, max_pages } = props;
  const next = () => {
    setPage(page + 1);
  };
  const previous = () => {
    setPage(page - 1);
  };
  return (
    <ContainerDiv>
      {page > 1 ? <PreviousButton previous={previous} /> : null} {page}
      {page < max_pages ? <NextButton next={next} /> : null}
    </ContainerDiv>
  );
};
