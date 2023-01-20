import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Footer from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  argsType: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const TemplateFooter = Template.bind({});
