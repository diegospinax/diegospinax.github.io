import clsx from 'clsx';
import { useTheme } from '../hooks/useTheme';
import { NavBar } from './navbar/NavBar';
import { About } from './About';
import { Networking } from './networking/Networking';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';

export const Layout = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={
            clsx('w-svw min-h-svh select-none text-xs sm:text-base 2xl:text-lg',
                isDarkMode
                    ? ['bg-carbon-black', 'text-white-smoke']
                    : ['bg-white-smoke', 'text-carbon-black']
            )}
        >
            <div className='w-5/6 sm:w-4/5 mx-auto max-w-[624px] 2xl:max-w-[800px] flex flex-col py-4 sm:py-8 gap-6 sm:gap-12'>
                <NavBar />
                <About />
                <Networking />
                <Skills />
                <Projects />
            </div>
        </div>
    );
}
