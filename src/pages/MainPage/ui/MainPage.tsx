import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Main Page')}
        </Page>
    );
};

export default MainPage;
