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
                <a className={navStyle} href="">{t('skills')}</a>
                <a className={navStyle} href="">{t('projects')}</a>
                <div
                    onClick={() => setEnglishLang(!isEnglishLang)}
                    className="px-2 py-0.5 border cursor-pointer border-gray-400 rounded text-xs sm:text-sm hover:bg-charcoal-blue">
                    {isEnglishLang ? 'EN' : 'ES'}
                </div>
            </div>

        </div>
    )
}
