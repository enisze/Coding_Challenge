import React from "react";
import { Episode } from "../Models/Episode";
import { EpisodeInfo } from "./EpisodeInfo";

export const EpisodeList: React.FC<{ episodes: Episode[] }> = (props) => {
  const { episodes } = props;
  return (
    <div>
      {episodes.map((episode) => {
        return (
          <div key={episode.id}>
            <EpisodeInfo episode={episode} showDetails={true} />
          </div>
        );
      })}
    </div>
  );
};
