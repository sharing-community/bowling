import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FrameStatusEnum, IBowling } from "../../../../shared";

@Component({
  selector: 'game-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
  @Input()
  public player!: IBowling;

  public readonly FrameStatus = FrameStatusEnum;


}
