import { memo } from 'react';

import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={classNames(cls.gradientBig, {}, [className])} />
            <div className={classNames(cls.gradientSmall, {}, [className])} />
            <AppSvg className={cls.appLogo} />
        </HStack>
    );
});
