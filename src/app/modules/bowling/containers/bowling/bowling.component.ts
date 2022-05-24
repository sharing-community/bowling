import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutStore } from "../../../../shared";
import { map } from "rxjs";

@Component({
  selector: 'game-bowling',
  templateUrl: './bowling.component.html',
  styleUrls: ['./bowling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BowlingComponent {

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: LayoutStore
  ) { }


}
