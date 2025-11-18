import { useTranslation } from 'react-i18next';

export const Projects = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h4 className="text-base sm:text-2xl mb-3 sm:mb-6">{t("projects")}</h4>
            <div>
                
            </div>
        </div>
    )
}
