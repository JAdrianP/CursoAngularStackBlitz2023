import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { AlertComponent } from './alert.component';
import { AlertModule } from './alert.module';

type ComponentWithCustomControls = AlertComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [AlertModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Alert` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Alert = Template.bind({});
Alert.args = {};
