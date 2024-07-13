import type { Meta, StoryObj } from '@storybook/angular/';

import { RenderedAspectComponent } from './rendered-aspect.component';
import { RenderableSymbol } from '../../model/assets';

const meta: Meta<RenderedAspectComponent> = {
  component: RenderedAspectComponent,
};

export default meta;
type Story = StoryObj<RenderedAspectComponent>;

export const Primary: Story = {
  args: {
		symbol: {
			symbolPath: "/assets/images/principles/edge.png"
		}
  },
};
