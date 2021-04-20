import React from "react";
import { ContainerDiv, FavouriteButton } from "../Components/StyledComponents";
import { Character } from "../Models/Character";
import { CharacterInfo } from "./CharacterInfo";

export const CharacterList: React.FC<{ characters: Character[] }> = (props) => {
  const { characters } = props;
  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <CharacterInfo character={character} showDetails={true} />
          </div>
        );
      })}
    </div>
  );
};
