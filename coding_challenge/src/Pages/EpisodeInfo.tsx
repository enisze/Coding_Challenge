import React from "react";
import {
  ContainerDiv,
  ItemText,
  LinkButton,
} from "../Components/StyledComponents";
import { Episode } from "../Models/Episode";

export const EpisodeInfo: React.FC<{
  episode: Episode;
  showDetails: boolean;
}> = (props) => {
  const { episode, showDetails } = props;
  const PATH = "/episode/";

  return (
    <ContainerDiv style={{ paddingBottom: showDetails ? "1rem" : null }}>
      <ItemText style={{ width: showDetails ? "15rem" : null }}>
        Name: {episode.name}
      </ItemText>
      {showDetails ? <LinkButton path={PATH + episode.id} /> : null}
    </ContainerDiv>
  );
};
