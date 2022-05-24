import { FrameStatusEnum } from "../enums";
import { IFrame } from "../interfaces";

export class Frame implements IFrame {

  public scores: number[];
  public position: number;
  public status: FrameStatusEnum;

  constructor(
    protected readonly _position: number
  ) {
    this.position = _position;
    this.scores = [];
    this.status = FrameStatusEnum.NotReady;
  }

  public roll(pins: number): void {
    if (this.status !== FrameStatusEnum.Rolling && this.status !== FrameStatusEnum.NotReady) {
      return;
    }

    this.scores.push(pins);
    this.updateStatus();
  }

  public updateStatus(): void {
    if (this.status === FrameStatusEnum.NotReady) {
      if (this.isStrike) {
        this.status = FrameStatusEnum.Strike;
      } else {
        this.status = FrameStatusEnum.Rolling;
      }
      return;
    }

    if (this.isSpare) {
      this.status = FrameStatusEnum.Spare;
    } else {
      this.status = FrameStatusEnum.OpenFrame;
    }
  }

  public get isStrike(): boolean {
    return this.scores[0] === 10;
  }

  public get isSpare(): boolean {
    return !this.isStrike && this.totalScore === 10;
  }

  public get isOpenFrame(): boolean {
    return !this.isSpare && !this.isStrike;
  }

  public get canMoveNext(): boolean {
    return this.status !== FrameStatusEnum.Rolling && this.status !== FrameStatusEnum.NotReady;
  }

  public get totalScore(): number {
    return this.scores.reduce((acc, cur) => acc + cur, 0);
  }

  public getNew(): Frame {
    const frame = new Frame(this.position);
    frame.status = this.status;
    frame.scores = this.scores;
    return frame;
  }

}
