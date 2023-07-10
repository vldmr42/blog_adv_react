import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Themes } from '@/shared/const/theme';

import { Text } from './Text';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';

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
    variant: 'error',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title Title',
    text: 'Really long description to see how text is going',
    size: 's',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title Title',
    text: 'Really long description to see how text is going',
    size: 'm',
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title Title',
    text: 'Really long description to see how text is going',
    size: 'l',
};
