/* eslint-disable i18next/no-literal-string */
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Comments')} />
            <CommentList
                isLoading
                comments={[
                    {
                        id: '1',
                        text: 'comment 1',
                        user: {
                            id: '1',
                            username: 'ulbi tv',
                            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
                        },
                    },
                    {
                        id: '2',
                        text: 'comment 2',
                        user: {
                            id: '1',
                            username: 'ulbi tv',
                            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
                        },
                    },
                ]}
            />
        </div>
    );
};

export default memo(ArticlesDetailsPage);
