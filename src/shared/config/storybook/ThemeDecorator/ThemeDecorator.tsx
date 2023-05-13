import '@/app/styles/index.scss';
import { Story } from '@storybook/react';
import { ThemeProvider, Themes } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
