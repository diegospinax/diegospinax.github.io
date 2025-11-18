import { useTranslation } from 'react-i18next';
import { SkillButton } from './SkillButton';
import icons from '../../util/skill_icons';


export const Skills = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h4 className="text-base sm:text-2xl mb-4 sm:mb-6">{t("skills")}</h4>
            <div className='grid grid-cols-4 gap-y-6 bg-carbon-black text-white-smoke rounded'>
                {icons.map((element) =>
                    <SkillButton icon={element.icon} label={element.label} />
                )}
            </div>
        </div>
    )
}
