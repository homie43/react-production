import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
import { Modal } from 'shared/ui/Modal/Modal';

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className={classNames('app', {}, [theme])}>
            <React.Suspense fallback=''>
                <button onClick={() => setIsOpen(true)}>toggle</button>

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore, necessitatibus! Accusantium, vitae. Hic deserunt
                </Modal>

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
