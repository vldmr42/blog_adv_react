import { Story } from '@storybook/react';

// eslint-disable-next-line vldmr-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
// eslint-disable-next-line vldmr-plugin/layer-imports
import '@/app/styles/index.scss';
import { Themes } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
