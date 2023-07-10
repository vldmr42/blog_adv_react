import { memo } from 'react';

import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={classNames(cls.gradientBig, {}, [className])} />
            <div className={classNames(cls.gradientSmall, {}, [className])} />
            <AppSvg
                color="black"
                width={size}
                height={size}
                className={cls.appLogo}
            />
        </HStack>
    );
});
