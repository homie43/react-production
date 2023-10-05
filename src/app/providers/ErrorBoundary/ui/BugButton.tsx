import React from 'react';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = React.useState(false);

    const onThrow = () => setError(true);

    React.useEffect(() => {
        throw new Error();
    }, []);

    return (
        <Button
            onClick={onThrow}
            // eslint-disable-next-line i18next/no-literal-string
        >
            throw error
        </Button>
    );
};
