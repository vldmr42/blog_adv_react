import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ArticleBlockType } from '../../model/consts/consts';
import { Themes } from '@/shared/const/theme';

export default {
    title: 'entities/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => (
    <ArticleImageBlockComponent
        {...(args as typeof ArticleImageBlockComponent.arguments)}
    />
);

export const Light = Template.bind({});
Light.args = {
    block: {
        id: '1',
        src: 'path',
        title: 'title',
        type: ArticleBlockType.IMAGE,
    },
};

export const Dark = Template.bind({});
Dark.args = {
    block: {
        id: '1',
        src: 'path',
        title: 'title',
        type: ArticleBlockType.IMAGE,
    },
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
