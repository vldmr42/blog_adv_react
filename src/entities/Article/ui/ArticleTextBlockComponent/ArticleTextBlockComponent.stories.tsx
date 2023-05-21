import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from '@/shared/const/theme';

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ArticleBlockType } from '../../model/consts/consts';

export default {
    title: 'entities/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => (
    <ArticleTextBlockComponent
        {...(args as typeof ArticleTextBlockComponent.arguments)}
    />
);

export const Light = Template.bind({});
Light.args = {
    block: {
        id: '1',
        paragraphs: ['first', 'second'],
        type: ArticleBlockType.TEXT,
        title: 'title',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    block: {
        id: '1',
        paragraphs: ['first', 'second'],
        type: ArticleBlockType.TEXT,
        title: 'title',
    },
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
