import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from '../../../app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Really long description to see how text is going',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title',
    text: 'Really long description to see how text is going',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Really long description to see how text is going',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Really long description to see how text is going',
    theme: TextTheme.ERROR,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title',
    text: 'Really long description to see how text is going',
    size: TextSize.L,
};
