import React from "react";
import {
  ContainerDiv,
  FavouriteButton,
  ItemText,
  LinkButton,
} from "../Components/StyledComponents";
import { Character } from "../Models/Character";

export const CharacterInfo: React.FC<{
  character: Character;
  showDetails: boolean;
}> = (props) => {
  const { character, showDetails } = props;
  const PATH = "/character/";
  return (
    <ContainerDiv style={{ paddingBottom: showDetails ? "1rem" : null }}>
      <ItemText style={{ width: showDetails ? "15rem" : null }}>
        Name: {character.name}
      </ItemText>
      {showDetails ? <LinkButton path={PATH + character.id} /> : null}
      <FavouriteButton id={character.id} />
    </ContainerDiv>
  );
};
