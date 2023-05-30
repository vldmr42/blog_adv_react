import { memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

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
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Enter your feedback')}
            />
        </>
    );

    return (
        <Card
            data-testid="RatingCard"
            max
            className={classNames('', {}, [className])}
        >
            <VStack max align="center" gap="8">
                <Text
                    title={starsCount ? t('Thanks for your rating') : title}
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
                            <Button
                                fullWidth
                                onClick={acceptHandle}
                                size={ButtonSize.L}
                            >
                                {t('Send')}
                            </Button>
                        </VStack>
                    </Drawer>
                ) : (
                    <Modal isOpen={isModalOpen} lazy>
                        <VStack gap="32" max>
                            {modalContent}
                            <HStack max gap="16" justify="end">
                                <Button
                                    data-testid="RatingCard.Close"
                                    onClick={cancelHandle}
                                    theme={ButtonTheme.OUTLINE_RED}
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
                        </VStack>
                    </Modal>
                )}
            </VStack>
        </Card>
    );
});
