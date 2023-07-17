import { memo } from 'react';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        order,
        search,
        sort,
        type,
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
    } = useArticleFilters();
    return (
        <ArticlesFilters
            order={order}
            search={search}
            sort={sort}
            type={type}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            className={className}
        />
    );
});
