import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const canEdit = authData?.id === profileData?.id;

        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancellEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card border="borderPartial" padding="24" max>
                        <HStack
                            max
                            justify="between"
                            className={classNames('', {}, [className])}
                        >
                            <Text title={t('Profile')} />
                            {canEdit && (
                                <div>
                                    {readonly ? (
                                        <Button
                                            onClick={onEdit}
                                            variant="outline"
                                            data-testid="EditableProfileCardHeader.EditButton"
                                        >
                                            {t('Edit')}
                                        </Button>
                                    ) : (
                                        <HStack gap="8">
                                            <Button
                                                onClick={onCancellEdit}
                                                variant="outline"
                                                data-testid="EditableProfileCardHeader.CancelButton"
                                                color="error"
                                            >
                                                {t('Cancel')}
                                            </Button>
                                            <Button
                                                onClick={onSave}
                                                variant="outline"
                                                data-testid="EditableProfileCardHeader.SaveButton"
                                                color="success"
                                            >
                                                {t('Save')}
                                            </Button>
                                        </HStack>
                                    )}
                                </div>
                            )}
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        max
                        justify="between"
                        className={classNames('', {}, [className])}
                    >
                        <TextDeprecated title={t('Profile')} />
                        {canEdit && (
                            <div>
                                {readonly ? (
                                    <ButtonDeprecated
                                        onClick={onEdit}
                                        theme={ButtonTheme.OUTLINE}
                                        data-testid="EditableProfileCardHeader.EditButton"
                                    >
                                        {t('Edit')}
                                    </ButtonDeprecated>
                                ) : (
                                    <HStack gap="8">
                                        <ButtonDeprecated
                                            onClick={onCancellEdit}
                                            theme={ButtonTheme.OUTLINE_RED}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                        >
                                            {t('Cancel')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            onClick={onSave}
                                            theme={ButtonTheme.OUTLINE}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                        >
                                            {t('Save')}
                                        </ButtonDeprecated>
                                    </HStack>
                                )}
                            </div>
                        )}
                    </HStack>
                }
            />
        );
    },
);
