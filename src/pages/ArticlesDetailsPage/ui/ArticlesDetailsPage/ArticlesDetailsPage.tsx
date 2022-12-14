/* eslint-disable i18next/no-literal-string */
import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <ArticleDetails />
        </div>
    );
};

// export default memo(ArticlesDetailsPage);
export default ArticlesDetailsPage;
