import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { Comp6Component } from './comp6.component';
import { Comp6Module } from './comp6.module';

type ComponentWithCustomControls = Comp6Component;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Comp6',
  component: Comp6Component,
  decorators: [
    moduleMetadata({
      imports: [Comp6Module],
    }),
  ],
  parameters: {
    docs: { description: { component: `Comp6` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Comp6 = Template.bind({});
Comp6.args = {};
