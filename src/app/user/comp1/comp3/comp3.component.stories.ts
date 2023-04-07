import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { Comp3Component } from './comp3.component';
import { Comp3Module } from './comp3.module';

type ComponentWithCustomControls = Comp3Component;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Comp3',
  component: Comp3Component,
  decorators: [
    moduleMetadata({
      imports: [Comp3Module],
    }),
  ],
  parameters: {
    docs: { description: { component: `Comp3` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Comp3 = Template.bind({});
Comp3.args = {};
