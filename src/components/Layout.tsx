import clsx from 'clsx';
import { useTheme } from '../hooks/useTheme';
import { NavBar } from './navbar/NavBar';
import { About } from './About';
import { Networking } from './networking/Networking';
import { Skills } from './Skills';

export const Layout = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={
            clsx('w-svw h-auto select-none',
                isDarkMode
                    ? ['bg-carbon-black', 'text-white-smoke']
                    : ['bg-white-smoke', 'text-carbon-black']
            )}
        >
            <div className='w-4/5 mx-auto max-w-[624px] flex flex-col py-8 gap-12'>
                <NavBar />
                <About />
                <Networking />
                <Skills />
            </div>
        </div>
    );
}
