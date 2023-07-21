import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileCardRedesigned } from './ProfileCardRedesigned';

export default {
    title: 'pages/ProfileCardRedesigned',
    component: ProfileCardRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCardRedesigned>;

const Template: ComponentStory<typeof ProfileCardRedesigned> = (args) => (
    <ProfileCardRedesigned
        {...(args as typeof ProfileCardRedesigned.arguments)}
    />
);

export const Normal = Template.bind({});
Normal.args = {};
