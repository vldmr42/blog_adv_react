import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from '@/app/providers/ThemeProvider';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...(args as typeof NotificationItem.arguments)} />
);

export const Light = Template.bind({});
Light.args = {
    item: {
        description: 'description',
        id: '1',
        title: 'title',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    item: {
        description: 'description',
        id: '1',
        title: 'title',
    },
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
