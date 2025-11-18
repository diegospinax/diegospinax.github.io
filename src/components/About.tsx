import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import clsx from 'clsx';

export const About = () => {
    const [endVariant, setEndVariant] = useState<1 | 2>(1);
    const { t } = useTranslation();
    const { isDarkMode } = useTheme();

    const highlightText = isDarkMode ? "text-lilac-ash" : "text-lilac-ash-dark";

    return (
        <>
            <div className='flex flex-col gap-2 sm:gap-4'>
                <h3 className='text-2xl sm:text-4xl'>
                    Diego Ospina
                </h3>
                <div className='flex gap-4'>
                    <p className='opacity-80'>{t('about.profession.software_engineer')}</p>
                    <span className={clsx("scale-150", highlightText)}>●</span>
                    <p className='opacity-80'>{t('about.profession.student')}</p>
                </div>
            </div>

            <div className='flex flex-col gap-3 sm:gap-4'>
                <p className={clsx("italic font-semibold", highlightText)}>{t('about.intro_sentence')}</p>
                <p>{t('about.intro_paragraph.1')}</p>
                <p>{t('about.intro_paragraph.2')}</p>
                <p>{t('about.intro_end.base')} {' '}
                    <a href='https://www.linkedin.com/in/diego-ospinax/'
                    onClick={() => setEndVariant(2)}
                        target='_blank'
                        className={clsx("italic font-semibold", highlightText)}
                    >
                        {endVariant == 1 ? t('about.intro_end.end_variant_1') : t('about.intro_end.end_variant_2')}
                    </a>
                </p>
            </div>


        </>
    )
}
