import {Row} from './row';

export interface Game {
  playerNames: string[];
  rows: Row[];
  winner: { name: string, points: number };
  date: Date;
}
