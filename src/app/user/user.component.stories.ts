import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { UserComponent } from './user.component';
import { UserModule } from './user.module';

type ComponentWithCustomControls = UserComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/User',
  component: UserComponent,
  decorators: [
    moduleMetadata({
      imports: [UserModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `User` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const User = Template.bind({});
User.args = {};
