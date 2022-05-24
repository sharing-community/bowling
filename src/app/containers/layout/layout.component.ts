import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LayoutStore } from "../../shared";

@Component({
  selector: 'game-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    LayoutStore
  ]
})
export class LayoutComponent {

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: LayoutStore
  ) { }

}
