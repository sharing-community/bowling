import { IBowling, IFrame } from "../interfaces";
import { v4 } from 'uuid';
import { Frame } from "./frame.model";
import { FrameStatusEnum } from "../enums";

export class Bowling implements IBowling {
  public frames: IFrame[];
  public id: string;
  public name: string;
  public currentIndex: number;

  constructor(
    protected readonly _name: string
  ) {
    this.id = v4();
    this.name = _name;
    this.frames = Array.from({length: 10}).map((e, i) => new Frame(i));
    this.currentIndex = 0;
  }

  public roll(pins: number): void {
    const currentFrame = this.frames[this.currentIndex];
    currentFrame.roll(pins);

    this.frames[this.currentIndex] = currentFrame.getNew();

    if (currentFrame.canMoveNext) {
      this.currentIndex = (this.currentIndex === 10 ? 10 : this.currentIndex + 1);
    }
  }

  public get renderFrames(): string[] {
    const renderFrames: number[] = [];
    for (let i = 0; i < this.frames.length; i++) {
      const frame = this.frames[i];

      switch (frame.status) {
        case FrameStatusEnum.NotReady:
          renderFrames.push(0);
          break;
        case FrameStatusEnum.OpenFrame:
          renderFrames.push(frame.totalScore);
          break;
        case FrameStatusEnum.Rolling:
          renderFrames.push(0);
          break;
        case FrameStatusEnum.Spare:
          if (i === this.frames.length - 1) {
            renderFrames.push(10);
          } else {
            renderFrames.push(10 + this.frames[i + 1].totalScore);
          }
          break;
        case FrameStatusEnum.Strike:
          if (i === this.frames.length - 1) {
            renderFrames.push(10);
          } else {
            const secondFrame = this.frames[i + 1];
            if (secondFrame.status === FrameStatusEnum.Strike) {
              const thirdFrame = this.frames[i + 2];
              renderFrames.push(20 + (thirdFrame ? (thirdFrame.scores[0] || 0) : 0));
            } else {
              renderFrames.push(10 + this.frames[i + 1].totalScore);
            }
          }
          break;
      }
    }

    let count = 1;

    while (count < 10) {
      renderFrames[count] = renderFrames[count] + renderFrames[count - 1];
      count++;
    }

    return renderFrames.map((frame, i) => {
      if (this.frames[i].canMoveNext) {
        return frame.toString();
      } else {
        return '';
      }
    });
  }

  public getNew(): IBowling {
    const bowling = new Bowling(this.name);
    bowling.currentIndex = this.currentIndex;
    bowling.frames = this.frames;
    bowling.id = this.id;
    return bowling;
  }

}
