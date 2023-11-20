import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false); // отвечает за открытие Modal
    return (
        <div className={classNames('app', {}, [theme])}>
            <React.Suspense fallback=''>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Velit, fuga? Velit sapiente vitae molestiae delectus ad
                    deserunt soluta culpa, voluptatum error eos nulla beatae id
                    doloremque fugit fuga optio nemo!
                </Modal>
                <Navbar />
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </React.Suspense>
        </div>
    );
};

export default App;
