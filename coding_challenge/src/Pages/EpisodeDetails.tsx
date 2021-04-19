import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import { BackButton } from "../Components/StyledComponents";
import { dataCollector } from "../DataCollector";
import { Character } from "../Models/Character";
import { Episode } from "../Models/Episode";
import { CharacterList } from "./CharacterList";

interface EpisodeParams {
  id: string;
}
export const EpisodeDetails: React.FC<RouteComponentProps> = (props) => {
  const { id } = useParams<EpisodeParams>();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchData = async () => {
    dataCollector.getEpisodeById(parseInt(id)).then((episode) => {
      setEpisode(episode);
      const ids: number[] = [];
      episode.characters.forEach((char) => {
        const split = char.split("/");
        const id = parseInt(split[split.length - 1]);
        ids.push(id);
      });
      dataCollector.getCharactersByIds(ids).then((characters) => {
        setCharacters(characters);
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <BackButton goBack={props.history.goBack} />
      {episode ? (
        <div>
          Episode:<span>{episode.name}</span>
          {characters.length > 0 ? (
            <CharacterList characters={characters}></CharacterList>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
