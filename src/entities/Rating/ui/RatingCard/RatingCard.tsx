import { memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        rate = 0,
    } = props;

    const { t } = useTranslation();
    const isMobile = useDevice();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Enter your feedback')}
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Enter your feedback')}
                    />
                </>
            }
        />
    );

    const content = (
        <VStack max align="center" gap="8">
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Text
                        title={starsCount ? t('Thanks for your rating') : title}
                    />
                }
                off={
                    <TextDeprecated
                        title={starsCount ? t('Thanks for your rating') : title}
                    />
                }
            />

            <StarRating
                selectedStars={starsCount}
                size={40}
                onSelect={onSelectStars}
            />
            {isMobile ? (
                <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <Button
                                    fullWidth
                                    onClick={acceptHandle}
                                    size="l"
                                >
                                    {t('Send')}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated
                                    fullWidth
                                    onClick={acceptHandle}
                                    size={ButtonSize.L}
                                >
                                    {t('Send')}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </Drawer>
            ) : (
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32" max>
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <HStack max gap="16" justify="end">
                                    <Button
                                        data-testid="RatingCard.Close"
                                        onClick={cancelHandle}
                                        variant="outline"
                                    >
                                        {t('Close')}
                                    </Button>
                                    <Button
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandle}
                                    >
                                        {t('Send')}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <HStack max gap="16" justify="end">
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Close"
                                        onClick={cancelHandle}
                                        theme={ButtonTheme.OUTLINE_RED}
                                    >
                                        {t('Close')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandle}
                                    >
                                        {t('Send')}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            )}
        </VStack>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    padding="24"
                    data-testid="RatingCard"
                    max
                    className={classNames('', {}, [className])}
                >
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    data-testid="RatingCard"
                    max
                    className={classNames('', {}, [className])}
                >
                    {content}
                </CardDeprecated>
            }
        />
    );
});
