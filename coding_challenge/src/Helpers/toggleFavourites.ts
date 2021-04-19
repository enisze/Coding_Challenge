import { getFavourites, setFavourites } from "./LocalForage";
export const toggleFavourites = async (id: number): Promise<number[]> => {
  let newFavourites: number[] = [];
  const favourites: number[] = await getFavourites();
  if (!favourites) {
    setFavourites([id]);
    return;
  }
  if (!favourites.includes(id)) {
    const distinctFavourites = new Set([...favourites, id]);
    newFavourites = [...distinctFavourites];
  } else {
    favourites?.map((faveId) =>
      faveId !== id ? newFavourites.push(faveId) : null
    );
  }
  setFavourites(newFavourites);
  return newFavourites;
};
