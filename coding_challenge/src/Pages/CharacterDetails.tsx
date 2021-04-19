import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, RouteComponentProps, useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import { BackButton, Button } from "../Components/StyledComponents";
import { dataCollector } from "../DataCollector";
import { toggleFavourites } from "../Helpers/toggleFavourites";
import { Character } from "../Models/Character";
import { faHeart, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { Episode } from "../Models/Episode";
import { EpisodeList } from "./EpisodeList";

interface Characterparams {
  id: string;
}
export const CharacterDetails: React.FC<RouteComponentProps> = (props) => {
  const { id } = useParams<Characterparams>();
  const appContext = useContext(AppContext);
  const favourites = appContext.favourites;

  const [character, setCharacter] = useState<Character | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const fetchData = async () => {
    dataCollector.getCharacterById(parseInt(id)).then((character) => {
      setCharacter(character);
      const ids: number[] = [];
      character.episode.forEach((char) => {
        const split = char.split("/");
        const id = parseInt(split[split.length - 1]);
        ids.push(id);
      });
      dataCollector.getEpisodesByIds(ids).then((episodes) => {
        setEpisodes(episodes);
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calculateFavourites = async (id: number) => {
    appContext.setFavourites(await toggleFavourites(id));
  };
  return (
    <div>
      {character ? (
        <div>
          <BackButton goBack={props.history.goBack}></BackButton>
          <img src={character.image} />
          <span>{character.name}</span>
          <Button
            onClick={() => {
              calculateFavourites(character.id);
            }}
          >
            <FontAwesomeIcon
              icon={favourites.includes(character.id) ? faHeart : regularHeart}
            />
          </Button>
        </div>
      ) : null}
      <div>
        {episodes ? (
          <EpisodeList episodes={episodes}></EpisodeList>
        ) : (
          <div>No Episodes</div>
        )}
      </div>
    </div>
  );
};
