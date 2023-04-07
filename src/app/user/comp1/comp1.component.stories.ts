import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { Comp1Component } from './comp1.component';
import { Comp1Module } from './comp1.module';

type ComponentWithCustomControls = Comp1Component;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Comp1',
  component: Comp1Component,
  decorators: [
    moduleMetadata({
      imports: [Comp1Module],
    }),
  ],
  parameters: {
    docs: { description: { component: `Comp1` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Comp1 = Template.bind({});
Comp1.args = {};
