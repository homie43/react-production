import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

const App = () => {
    React.useEffect(() => {
        throw new Error();
    }, []);

    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <React.Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </React.Suspense>
        </div>
    );
};

export default App;
