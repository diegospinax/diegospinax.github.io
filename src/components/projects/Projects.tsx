import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../SectionHeader';

export const Projects = () => {
    const { t } = useTranslation();

    return (
        <div>
            <SectionHeader content={t("projects")} />
            <div>

            </div>
        </div>
    )
}
