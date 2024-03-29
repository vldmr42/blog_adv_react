import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Themes } from '@/shared/const/theme';

import { Modal } from './Modal';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis ratione in blanditiis mollitia architecto atque quas reprehenderit ipsum libero.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis ratione in blanditiis mollitia architecto atque quas reprehenderit ipsum libero.',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
