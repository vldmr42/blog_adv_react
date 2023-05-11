import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from '@/app/providers/ThemeProvider';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => {
    return (
        <ListBox {...(args as typeof ListBox.arguments)} />);
};

export const Light = Template.bind({});
Light.args = {
    defaultValue: 'Choose value',
    onChange: (value) => null,
    value: undefined,
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '222' },
        { value: '3', content: 'asd' },
        { value: '4', content: 'ddd', disabled: true },
    ],
    direction: 'top left',

};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
