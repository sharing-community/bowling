import { IBowling } from "../../interfaces";

export interface LayoutState {
  players: IBowling[];
  start: boolean;
  currentIndex: number;
}
