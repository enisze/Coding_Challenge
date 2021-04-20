import React, { useContext, useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import { DashboardLayout } from "../Components/DashboardLayout";
import {
  BackButton,
  ContainerDiv,

  HeaderText,
  ItemText
} from "../Components/StyledComponents";
import { dataCollector } from "../DataCollector";
import { Character } from "../Models/Character";
import { Episode } from "../Models/Episode";
import { CharacterInfo } from "./CharacterInfo";
import { EpisodeList } from "./EpisodeList";

interface Characterparams {
  id: string;
}
export const CharacterDetails: React.FC<RouteComponentProps> = (props) => {
  const { id } = useParams<Characterparams>();
  const appContext = useContext(AppContext);

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

  return (
    <DashboardLayout>
      <div>
        {character ? (
          <div>
            <BackButton goBack={props.history.goBack}></BackButton>
          <HeaderText>Character Details:</HeaderText>
            <ContainerDiv>
              <img
                style={{ paddingBottom: "1rem", paddingRight: "1rem" }}
                src={character.image}
              />
              <div>
                <CharacterInfo character={character} showDetails={false} />
                <ItemText>Species: {character.species}</ItemText>
                <ItemText>Gender: {character.gender}</ItemText>
                <ItemText>Status: {character.status}</ItemText>
                <ItemText>
                  Type: {character.type ? character.type : "None"}
                </ItemText>
              </div>
            </ContainerDiv>
          </div>
        ) : null}
        <div>
          <HeaderText>Episode List:</HeaderText>
          {episodes ? (
            <EpisodeList episodes={episodes}></EpisodeList>
          ) : (
            <div>No Episodes</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};
