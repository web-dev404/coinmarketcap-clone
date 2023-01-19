import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { mockBaseWrapperProps } from '@/layout/wrapper/Wrapper.mocks';

import Wrapper from './Wrapper';

export default {
  title: 'Layout/Wrapper',
  component: Wrapper,
  argsTypes: {},
} as ComponentMeta<typeof Wrapper>;

const Template: ComponentStory<typeof Wrapper> = args => <Wrapper {...args} />;

export const LayoutMeta = Template.bind({});

LayoutMeta.args = {
  ...mockBaseWrapperProps.base,
};
