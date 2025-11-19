import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';

export const Typing = () => {
    const { t, i18n } = useTranslation();
    const { isDarkMode } = useTheme();
    const highlightText = isDarkMode ? "text-lilac-ash" : "text-lilac-ash-dark";

    const texts = [
        t('about.intro_end.end_variant_1'),
        t('about.intro_end.end_variant_2')
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentFullText = texts[currentTextIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                if (displayedText.length < currentFullText.length) {
                    setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
                    setTypingSpeed(150);
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
                    setTypingSpeed(75);
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                    setTypingSpeed(500);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentTextIndex, typingSpeed, texts, i18n]);

    return (
        <a href='https://www.linkedin.com/in/diego-ospinax/'
            target='_blank'
            className={clsx("italic font-semibold", highlightText)}
        >
            {displayedText}
            <span className="animate-pulse">|</span>
        </a>
    )
}
