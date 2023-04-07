import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { SharedComponent } from './shared.component';
import { SharedModule } from './shared.module';

type ComponentWithCustomControls = SharedComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Shared',
  component: SharedComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Shared` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Shared = Template.bind({});
Shared.args = {};
