import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
}

export const ArticleDetails = ({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            ArticleDetails
        </div>
    );
};
