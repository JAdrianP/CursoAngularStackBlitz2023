import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { SidenavComponent } from './sidenav.component';
import { SidenavModule } from './sidenav.module';

type ComponentWithCustomControls = SidenavComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Sidenav',
  component: SidenavComponent,
  decorators: [
    moduleMetadata({
      imports: [SidenavModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Sidenav` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Sidenav = Template.bind({});
Sidenav.args = {};
