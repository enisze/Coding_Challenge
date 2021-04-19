import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export const Button = styled.button``;

export const BackButton: React.FC<{ goBack: () => void }> = (props) => {
  const { goBack } = props;
  return (
    <Button onClick={goBack}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Button>
  );
};
export const Text = styled.div``;
