import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ArticleBlockType } from '../../model/consts/consts';
import { Themes } from '@/shared/const/theme';

const code = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>`;

export default {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => (
    <ArticleCodeBlockComponent
        {...(args as typeof ArticleCodeBlockComponent.arguments)}
    />
);

export const Light = Template.bind({});
Light.args = {
    block: {
        code,
        id: '1',
        type: ArticleBlockType.CODE,
    },
};

export const Dark = Template.bind({});
Dark.args = {
    block: {
        code,
        id: '1',
        type: ArticleBlockType.CODE,
    },
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
