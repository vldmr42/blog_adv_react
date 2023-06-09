import { Themes } from '@/shared/const/theme';

export interface JsonSettings {
    theme?: Themes;
    isFirstVisit?: boolean;
    settingsPageHasBeenOpen?: boolean;
}
