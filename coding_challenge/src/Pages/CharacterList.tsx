import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { Button } from "../Components/StyledComponents";
import { toggleFavourites } from "../Helpers/toggleFavourites";
import { Character } from "../Models/Character";

export const CharacterList: React.FC<{ characters: Character[] }> = (props) => {
  const { characters } = props;
  const appContext = useContext(AppContext);
  const favourites = appContext.favourites;
  const onClick = async (id: number) => {
    appContext.setFavourites(await toggleFavourites(id));
  };
  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <span>{character.name}</span>
            <Button
              onClick={() => {
                onClick(character.id);
              }}
            >
              <FontAwesomeIcon
                icon={
                  favourites.includes(character.id) ? faHeart : regularHeart
                }
              />
            </Button>
            <Link to={{ pathname: `/character/${character.id}` }}>
              <Button onClick={() => {}}>Show Character</Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
