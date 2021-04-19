import { Character } from "./Models/Character";
import { Episode } from "./Models/Episode";

export class DataCollector {
  private static instance: DataCollector;
  endpoint = "https://rickandmortyapi.com/api";

  public MAX_PAGE_EPISODES = 0;
  public MAX_PAGE_CHARACTERS = 0;
  private constructor() {}

  public static getInstance(): DataCollector {
    if (!DataCollector.instance) {
      DataCollector.instance = new DataCollector();
    }

    return DataCollector.instance;
  }

  getCharacters = async (page: number): Promise<Character[]> => {
    const response = await fetch(
      this.endpoint + "/character/?page=" + page
    ).then((data) => {
      return data.json();
    });
    if (this.MAX_PAGE_CHARACTERS === 0) {
      this.MAX_PAGE_CHARACTERS = response.info.pages;
    }
    return response.results;
  };

  getCharactersByIds = async (ids: number[]): Promise<Character[]> => {
    if (!ids) return;
    const response = await fetch(this.endpoint + "/character/" + ids).then(
      (data) => {
        return data.json();
      }
    );
    return response.length > 1 ? response : [response];
  };

  getEpisodes = async (page: number): Promise<Episode[]> => {
    const response = await fetch(this.endpoint + "/episode/?page=" + page).then(
      (data) => {
        return data.json();
      }
    );
    if (this.MAX_PAGE_CHARACTERS === 0) {
      this.MAX_PAGE_EPISODES = response.info.pages;
    }
    return response.results;
  };
  
  getEpisodesByIds = async (ids: number[]): Promise<Episode[]> => {
    if (!ids) return;
    const response = await fetch(this.endpoint + "/episode/" + ids).then(
      (data) => {
        return data.json();
      }
    );
    return response.length > 1 ? response : [response];
  };

  getCharacterById = async (id: number): Promise<Character> => {
    if (!id) return;
    const response = await fetch(this.endpoint + "/character/" + id).then(
      (data) => {
        return data.json();
      }
    );
    return response;
  };

  getEpisodeById = async (id: number): Promise<Episode> => {
    if (!id) return;
    const response = await fetch(this.endpoint + "/episode/" + id).then(
      (data) => {
        return data.json();
      }
    );
    return response;
  };
}

export const dataCollector = DataCollector.getInstance();
