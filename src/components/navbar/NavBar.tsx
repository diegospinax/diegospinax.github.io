import { useEffect, useState } from "react"
import { ToggleThemeBtn } from "./ToggleThemeBtn"
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";
import clsx from "clsx";

export const NavBar = () => {
    const { isDarkMode } = useTheme();
    const [isEnglishLang, setEnglishLang] = useState<boolean>(false);
    const { t, i18n } = useTranslation();

    const navStyle = clsx(
        "hover:drop-shadow",
        isDarkMode && "hover:drop-shadow-xs hover:drop-shadow-lilac-ash",
    );

    useEffect(() => {
        i18n.changeLanguage(isEnglishLang ? 'en' : 'es')
    }, [isEnglishLang, i18n])

    return (
        <div className="w-full flex justify-between">
            <ToggleThemeBtn />
            <div className="flex gap-6 items-center ">
                <a className={navStyle} href="#skills">{t('skills')}</a>
                <a className={navStyle} href="#projects">{t('projects')}</a>
                <div
                    onClick={() => setEnglishLang(!isEnglishLang)}
                    className={clsx("flex text-sm px-2.5 py-1 gap-1 border rounded-lg w-full sm:max-w-max transition-all duration-300",
                        isDarkMode
                            ? "border-charcoal-blue/20 text-white-smoke hover:border-lilac-ash/50 hover:text-lilac-ash bg-white/5 stroke-white-smoke hover:stroke-lilac-ash"
                            : "border-charcoal-blue hover:border-lilac-ash-dark/90 hover:text-lilac-ash-dark/90 hover:bg-lilac-ash-dark/5 stroke-charcoal-blue hover:stroke-lilac-ash-dark/90 bg-white-smoke drop-shadow"
                    )}>
                    <svg className="size-5 fill-current stroke-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z">
                            </path>
                        </g>
                    </svg>
                    {isEnglishLang ? 'EN' : 'ES'}
                </div>
            </div>

        </div>
    )
}
