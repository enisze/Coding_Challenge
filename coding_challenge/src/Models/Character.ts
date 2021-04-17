import { Episode } from "./Episode";

export interface Character {
  id: number;
  gender: Gender;
  species: string;
  name: string;
  status: Status;
  type: string;
  image: string;
  episodes: string[];
  url: string;
  created: string;
}

export enum Gender {
  Male = 0,
  Female = 1,
  Genderless = 2,
  Unknown = 3,
}

export enum Status {
  Alive = 0,
  Dead = 1,
  Unknown = 2,
}
