import { useEffect, useState } from "react"
import { ToggleThemeBtn } from "./ToggleThemeBtn"
import { useTranslation } from "react-i18next";

export const NavBar = () => {
    const [isEnglishLang, setEnglishLang] = useState<boolean>(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(isEnglishLang ? 'en' : 'es')
    }, [isEnglishLang, i18n])

    return (
        <div className="w-full flex justify-between">
            <ToggleThemeBtn />
            <div className="flex gap-6 items-center">
                <a href="">{t('skills')}</a>
                <a href="">{t('projects')}</a>
                <div
                    onClick={() => setEnglishLang(!isEnglishLang)}
                    className="px-2 py-0.5 border cursor-pointer border-gray-400 rounded text-sm hover:bg-charcoal-blue">
                    {isEnglishLang ? 'EN' : 'ES'}
                </div>
            </div>

        </div>
    )
}
