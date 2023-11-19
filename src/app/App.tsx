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
    const [isOpen, setIsOpen] = React.useState(false); // отвечает за открытие Modal
    return (
        <div className={classNames('app', {}, [theme])}>
            <React.Suspense fallback=''>
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
                <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Velit, fuga? Velit sapiente vitae molestiae delectus ad
                    deserunt soluta culpa, voluptatum error eos nulla beatae id
                    doloremque fugit fuga optio nemo!
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
