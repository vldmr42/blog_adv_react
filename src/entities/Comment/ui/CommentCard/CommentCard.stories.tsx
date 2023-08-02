import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

import { CommentCard } from './CommentCard';

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

const compArgs = {
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

export const Normal = Template.bind({});
Normal.args = compArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = compArgs;
NormalRedesigned.decorators = [
    FeatureFlagsDecorator({ isAppRedesigned: true }),
];
