import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

type ComponentWithCustomControls = HomeComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Home',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      imports: [HomeModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Home` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Home = Template.bind({});
Home.args = {};
