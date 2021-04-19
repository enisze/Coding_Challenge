import localForage from "localforage";

export const getFavourites = (): Promise<number[]> => {
  return localForage.getItem("favourites");
};

export const setFavourites = async (ids: number[]): Promise<void> => {
  await localForage.setItem("favourites", ids);
};
