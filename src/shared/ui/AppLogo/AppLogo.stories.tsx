import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLogo } from './AppLogo';

export default {
    title: 'pages/AppLogo',
    component: AppLogo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => (
    <AppLogo {...(args as typeof AppLogo.arguments)} />
);

export const Normal = Template.bind({});
Normal.args = {};
