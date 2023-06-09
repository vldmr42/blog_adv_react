import { useContext } from 'react';

import { Themes } from '@/shared/const/theme';

import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
    toggleTheme: (saveAction?: (theme: Themes) => void) => void;
    theme: Themes;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Themes) => void) => {
        let newTheme: Themes;
        switch (theme) {
            case Themes.DARK:
                newTheme = Themes.LIGHT;
                break;
            case Themes.LIGHT:
                newTheme = Themes.ORANGE;
                break;
            case Themes.ORANGE:
                newTheme = Themes.DARK;
                break;
            default:
                newTheme = Themes.LIGHT;
        }
        setTheme?.(newTheme);
        saveAction?.(newTheme);
    };
    return {
        theme: theme || Themes.LIGHT,
        toggleTheme,
    };
}
