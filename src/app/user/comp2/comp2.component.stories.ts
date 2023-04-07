import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { Comp2Component } from './comp2.component';
import { Comp2Module } from './comp2.module';

type ComponentWithCustomControls = Comp2Component;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Comp2',
  component: Comp2Component,
  decorators: [
    moduleMetadata({
      imports: [Comp2Module],
    }),
  ],
  parameters: {
    docs: { description: { component: `Comp2` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Comp2 = Template.bind({});
Comp2.args = {};
