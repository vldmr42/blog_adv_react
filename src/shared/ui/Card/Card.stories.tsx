import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...(args as typeof Card.arguments)} />);

export const Light = Template.bind({});
Light.args = {
    children: <Text title="Test Title" text="Test text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="Test Title" text="Test text" />,
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
