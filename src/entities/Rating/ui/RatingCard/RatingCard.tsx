import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';

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
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Enter your feedback')}
            />
        </>
    );

    return (
        <Card max className={classNames('', {}, [className])}>
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
                                    onClick={cancelHandle}
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t('Close')}
                                </Button>
                                <Button onClick={acceptHandle}>
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
