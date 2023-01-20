import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  argsType: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const TemplateHeader = Template.bind({});
