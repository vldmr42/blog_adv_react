import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/const/theme';

import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Type text',
    value: 'Text',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
