import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { Comp5Component } from './comp5.component';
import { Comp5Module } from './comp5.module';

type ComponentWithCustomControls = Comp5Component;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Comp5',
  component: Comp5Component,
  decorators: [
    moduleMetadata({
      imports: [Comp5Module],
    }),
  ],
  parameters: {
    docs: { description: { component: `Comp5` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Comp5 = Template.bind({});
Comp5.args = {};
