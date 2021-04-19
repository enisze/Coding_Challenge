import React, { createContext, useEffect, useState } from "react";
import App from "./App";
import localForage from "localforage";

interface AppContextInterface {
  favourites: number[];
  setFavourites: (favourites: number[]) => void;
}

export const AppContext = React.createContext<AppContextInterface>(null!);

export const AppContainer: React.FC = () => {
  const getFavourites = async () => {
    const localFavourites: number[] = await localForage.getItem("favourites");
    if (localFavourites) {
      setFavourites(localFavourites);
    }
  };
  const [favourites, setFavourites] = useState<number[]>([]);


  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <AppContext.Provider value={{ favourites, setFavourites }}>
      <App />
    </AppContext.Provider>
  );
};
