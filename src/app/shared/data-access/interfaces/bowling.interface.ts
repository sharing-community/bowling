import { IFrame } from "./frame.interface";

export interface IBowling {
  frames: IFrame[];
  id: string;
  name: string;
  currentIndex: number;
  roll(pins: number): void;
  getNew(): IBowling;
  get renderFrames(): string[];
}
