import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Dropdown from './Dropdown';
import { mockBaseDropdownProps } from './Dropdown.mocks';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  argsType: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const TemplateDropdown = Template.bind({});

TemplateDropdown.args = {
  ...mockBaseDropdownProps.base,
};
