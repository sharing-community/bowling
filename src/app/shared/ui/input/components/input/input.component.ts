import { ChangeDetectionStrategy, Component, ContentChild, Input, ViewEncapsulation } from '@angular/core';
import { InputDirective } from "../../directives";

@Component({
  selector: 'game-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @ContentChild(InputDirective, {static: true})
  public readonly input!: InputDirective;

  @Input()
  public label!: string;
}
