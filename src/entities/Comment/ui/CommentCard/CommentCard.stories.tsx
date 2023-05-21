import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentCard } from './CommentCard';
import { Themes } from '@/shared/const/theme';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...(args as typeof CommentCard.arguments)} />
);

export const Light = Template.bind({});
Light.args = {
    comment: {
        id: '1',
        text: 'Comment text',
        user: {
            id: '1',
            username: 'name',
        },
    },
    isLoading: false,
};

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        text: 'Comment text',
        user: {
            id: '1',
            username: 'name',
        },
    },
    isLoading: false,
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
