import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { Comp4Component } from './comp4.component';
import { Comp4Module } from './comp4.module';

type ComponentWithCustomControls = Comp4Component;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Comp4',
  component: Comp4Component,
  decorators: [
    moduleMetadata({
      imports: [Comp4Module],
    }),
  ],
  parameters: {
    docs: { description: { component: `Comp4` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Comp4 = Template.bind({});
Comp4.args = {};
