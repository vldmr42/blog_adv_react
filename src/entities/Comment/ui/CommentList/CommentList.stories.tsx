import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from '@/app/providers/ThemeProvider';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const comments = [
    {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'test' },
    },
    {
        id: '2',
        text: 'hehehehe',
        user: { id: '2', username: 'Peter' },
    },
];

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...(args as typeof CommentList.arguments)} />);

export const Light = Template.bind({});
Light.args = {
    comments,
};

export const Dark = Template.bind({});
Dark.args = {
    comments,
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    comments,
    isLoading: true,
};
