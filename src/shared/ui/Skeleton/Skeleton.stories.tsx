import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...(args as typeof Skeleton.arguments)} />);

export const Light = Template.bind({});
Light.args = {
    width: '100%',
    height: 200,
};

export const Round = Template.bind({});
Round.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const Dark = Template.bind({});
Dark.args = {
    width: '100%',
    height: 200,
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const DarkRound = Template.bind({});
DarkRound.args = {
    border: '50%',
    width: 100,
    height: 100,
};
DarkRound.decorators = [ThemeDecorator(Themes.DARK)];
