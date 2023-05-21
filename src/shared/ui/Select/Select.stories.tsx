import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from '@/shared/const/theme';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'label',
    options: [
        { value: 'Option1', content: 'opt1' },
        { value: 'Option2', content: 'opt2' },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'label',
    options: [
        { value: 'Option1', content: 'opt1' },
        { value: 'Option2', content: 'opt2' },
    ],
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
