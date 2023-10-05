import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = React.useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);

    React.useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={onThrow}>{t('throw error')}</Button>;
};
