import { Character } from "./Models/Character";
import { Episode } from "./Models/Episode";

export class DataCollector {
  private static instance: DataCollector;
  endpoint = "https://rickandmortyapi.com/api";

  private constructor() {}

  public static getInstance(): DataCollector {
    if (!DataCollector.instance) {
      DataCollector.instance = new DataCollector();
    }

    return DataCollector.instance;
  }

  getCharacters = async (page:number): Promise<Character[]> => {
    const response = await fetch(this.endpoint + "/character/?page="+page).then((data) => {
      return data.json();
    });
    return response.results;
  };

  getEpisodes = async (page:number): Promise<Episode[]> => {
    const response = await fetch(this.endpoint + "/episode/?page="+page).then((data) => {
      return data.json();
    });
    return response.results;
  };

  getCharacterById = async (id: number) => {
    const response = await fetch(this.endpoint + "/episode/"+id).then((data) => {
      return data.json();
    });
    return response.results;
  }

  getEpisodeById(id: number) {}

}

export const dataCollector = DataCollector.getInstance();
