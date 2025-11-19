import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import clsx from 'clsx';
import { Typing } from './Typing';

export const About = () => {
    const { t } = useTranslation();
    const { isDarkMode } = useTheme();

    return (
        <>
            <div className='flex flex-col gap-2 sm:gap-4'>
                <h3 className='text-2xl sm:text-4xl'>
                    Diego Ospina
                </h3>
                <div className='flex gap-4'>
                    <p className='opacity-80'>{t('about.profession.software_engineer')}</p>
                    <span className={clsx("scale-150",
                        isDarkMode ? "text-lilac-ash" : "text-lilac-ash-dark"
                    )}>●</span>
                    <p className='opacity-80'>{t('about.profession.student')}</p>
                </div>
            </div>

            <div className='flex flex-col gap-3 sm:gap-4'>
                <p className={clsx("italic font-semibold",
                    isDarkMode ? "text-lilac-ash" : "text-lilac-ash-dark"
                )}>{t('about.intro_sentence')}</p>
                <p>{t('about.intro_paragraph.1')}</p>
                <p>{t('about.intro_paragraph.2')}</p>
                <p>{t('about.intro_end.base')} {' '}
                    <Typing />
                </p>
            </div>


        </>
    )
}
