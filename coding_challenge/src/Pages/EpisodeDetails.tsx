import Icon from "awesome-react-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "../Components/StyledComponents";
import { dataCollector } from "../DataCollector";
import { Episode } from "../Models/Episode";

export const EpisodeDetails: React.FC = (props) => {
  const { id } = useParams<{ id: any }>();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const fetchData = async () => {
    setEpisode(await dataCollector.getEpisodeById(id));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const markAsFavourite = async (id: number) => {
    console.log("added favourite");
  };
  return (
    <div>
      {episode ? (
        <div>
            <span>{episode.characters}</span>
          <Button
            onClick={() => {
              markAsFavourite(episode.id);
            }}
          >
            <Icon name="heart"></Icon>
          </Button>
        </div>
      ) : null}
    </div>
  );
};
