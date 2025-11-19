import { useTranslation } from 'react-i18next';
import { SkillButton } from './SkillButton';
import { icons } from '../../util/skill_icons';
import { SectionHeader } from '../SectionHeader';


export const Skills = () => {
    const { t } = useTranslation();

    return (
        <div>
            <SectionHeader content={t("skills")} />
            <div className='grid grid-cols-4 gap-y-6'>
                {icons.map((element, index) =>
                    <SkillButton key={index} icon={element.icon} label={element.label} />
                )}
            </div>
        </div>
    )
}
