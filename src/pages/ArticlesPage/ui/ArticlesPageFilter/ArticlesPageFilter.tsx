import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

import cls from './ArticlesPageFilter.module.scss';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesPageFilterProps {
    className?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        order,
        search,
        sort,
        type,
        view,
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        onChangeView,
    } = useArticleFilters();

    return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Search')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
});
