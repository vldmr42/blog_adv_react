import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Dropdown } from 'shared/ui/Popups';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={className}
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Admin panel'),
                    href: RoutePath.admin_panel,
                }] : []),
                {
                    content: t('User profile'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Logout'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
            direction="bottom left"
        />
    );
});
