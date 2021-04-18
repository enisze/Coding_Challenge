import Icon from "awesome-react-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../Components/StyledComponents";
import { dataCollector } from "../DataCollector";
import { Character } from "../Models/Character";

interface Characterparams {
  id: string;
}

export const CharacterDetails: React.FC = (props) => {
  const { id } = useParams<Characterparams>();

  const [character, setCharacter] = useState<Character | null>(null);
  const fetchData = async () => {
    setCharacter(await dataCollector.getCharacterById(parseInt(id)));
  };
  
  useEffect(() => {
    fetchData();
  }, [id]);

  const markAsFavourite = async (id: number) => {
    console.log("added favourite");
  };
  return (
    <div>
      {character ? (
        <div>
          <img src={character.image} />
          <span>{character.episodes}</span>
          <Button
            onClick={() => {
              markAsFavourite(character.id);
            }}
          >
            <Icon name="heart"></Icon>
          </Button>
        </div>
      ) : null}
    </div>
  );
};
