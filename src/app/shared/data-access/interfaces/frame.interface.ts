import { FrameStatusEnum } from "../enums";

export interface IFrame {
  scores: number[];
  position: number;
  status: FrameStatusEnum;
  roll(pins: number): void;
  updateStatus(): void;
  getNew(): IFrame;
  get isStrike(): boolean;
  get isSpare(): boolean;
  get isOpenFrame(): boolean;
  get canMoveNext(): boolean;
  get totalScore(): number;
}
