import React from "react";
import { ContainerDiv, ItemText } from "../Components/StyledComponents";
import { Episode } from "../Models/Episode";
import { EpisodeInfo } from "./EpisodeInfo";

export const EpisodeList: React.FC<{ episodes: Episode[] }> = (props) => {
  const { episodes } = props;
  return (
    <div>
      {episodes.map((episode) => {
        return (
          <div key={episode.id}>
            <ContainerDiv>
              <ItemText style={{ width: "10rem" }}>{episode.episode}</ItemText>
              <EpisodeInfo episode={episode} showDetails={true} />
            </ContainerDiv>
          </div>
        );
      })}
    </div>
  );
};
