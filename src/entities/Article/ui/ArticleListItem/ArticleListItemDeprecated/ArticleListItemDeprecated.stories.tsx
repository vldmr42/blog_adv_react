import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

export default {
    title: 'pages/ArticleListItemDeprecated',
    component: ArticleListItemDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItemDeprecated>;

const Template: ComponentStory<typeof ArticleListItemDeprecated> = (args) => (
    <ArticleListItemDeprecated
        {...(args as typeof ArticleListItemDeprecated.arguments)}
    />
);

export const Normal = Template.bind({});
Normal.args = {};
