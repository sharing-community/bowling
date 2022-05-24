import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'game-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  @Input()
  public name!: string;
}
