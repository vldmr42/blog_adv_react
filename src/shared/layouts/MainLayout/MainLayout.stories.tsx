import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainLayout } from './MainLayout';

export default {
    title: 'pages/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
    <MainLayout {...(args as typeof MainLayout.arguments)} />
);

export const Normal = Template.bind({});
Normal.args = {};
