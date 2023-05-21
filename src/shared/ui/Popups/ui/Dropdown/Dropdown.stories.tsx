import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';
import { Themes } from '@/shared/const/theme';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...(args as typeof Dropdown.arguments)} />
);

export const Light = Template.bind({});
Light.args = {
    trigger: <Button>Open</Button>,
    items: [{ content: 'first' }, { content: 'second' }, { content: 'third' }],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
