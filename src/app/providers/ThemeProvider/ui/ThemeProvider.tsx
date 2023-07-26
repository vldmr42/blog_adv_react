import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { useJsonSettings } from '@/entities/User';

import { Themes } from '../../../../shared/const/theme';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Themes;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initialTheme, children } = props;
    const { theme: defaultTheme } = useJsonSettings();
    const [theme, setTheme] = useState<Themes>(
        initialTheme || defaultTheme || Themes.LIGHT,
    );
    const [isThemeInited, setThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );
    document.body.className = theme;
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
