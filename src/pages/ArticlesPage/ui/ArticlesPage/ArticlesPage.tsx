/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('');
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            ARTICLESPAGE
        </div>
    );
};

// export default memo(ArticlesPage);
export default ArticlesPage;
