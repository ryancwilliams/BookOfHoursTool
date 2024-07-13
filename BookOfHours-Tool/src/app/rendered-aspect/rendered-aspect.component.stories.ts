import type { Meta, StoryObj } from '@storybook/angular/';

import { RenderedAspectComponent } from './rendered-aspect.component';
import { RenderableSymbol } from '../../model/assets';

const meta: Meta<RenderedAspectComponent> = {
  component: RenderedAspectComponent,
};

export default meta;
type Story = StoryObj<RenderedAspectComponent>;

export const Edge: Story = {
  args: {
		symbol: {
			symbolPath: "/assets/images/principles/edge.png"
		}
  },
};

export const Sky: Story = {
  args: {
    symbol: {
      "symbolPath": "/assets/images/principles/sky.png"
    }
  }
};
