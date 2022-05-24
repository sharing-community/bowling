import { ComponentStore } from "@ngrx/component-store";
import { LayoutState } from "./layout.state";
import { layoutInitialState } from "./layout.constants";
import { Bowling } from "../../models";

export class LayoutStore extends ComponentStore<LayoutState> {

  constructor() {
    super(layoutInitialState);
  }

  public readonly register = this.updater<string[]>((state, names) => ({
    ...state,
    players: names.map((e) => new Bowling(e)),
    start: true
  }));

  public readonly updateStart = this.updater<boolean>((state, start) => ({
    ...state,
    start
  }));

  public readonly reset = this.updater<undefined>((state) => ({
    ...state,
    players: [],
    start: false
  }));

  public readonly roll = this.updater<number>((state, pins) => {

    const {currentIndex, players} = state;
    const currentPlayer = players[currentIndex];
    currentPlayer.roll(pins);
    players[currentIndex] = currentPlayer.getNew();

    return {
      ...state,
      players: [...players],
      currentIndex: currentIndex + 1 === players.length ? 0 : currentIndex + 1
    }
  });
}
