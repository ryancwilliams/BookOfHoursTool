import { Component, Input } from '@angular/core';
import { RenderableSymbol } from '../../model/assets';

@Component({
  selector: 'app-rendered-aspect',
  standalone: true,
  imports: [],
  templateUrl: './rendered-aspect.component.html',
  styleUrl: './rendered-aspect.component.scss'
})
export class RenderedAspectComponent {
	@Input({required: true}) symbol: RenderableSymbol;
}
