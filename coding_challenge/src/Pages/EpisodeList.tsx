import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components/StyledComponents";
import { Episode } from "../Models/Episode";

export const EpisodeList: React.FC<{ episodes: Episode[] }> = (props) => {
  const { episodes } = props;
  return (
    <div>
      {episodes.map((episode) => {
        return (
          <div>
            <span key={episode.episode}>{episode.name}</span>
            <Link to={{ pathname: `/episode/${episode.id}` }}>
              <Button onClick={() => {}}>Show Episode</Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
