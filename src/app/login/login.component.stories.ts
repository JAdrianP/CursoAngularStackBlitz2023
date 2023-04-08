import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';

type ComponentWithCustomControls = LoginComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [LoginModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Login` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Login = Template.bind({});
Login.args = {};
