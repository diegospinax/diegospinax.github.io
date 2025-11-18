import { useTranslation } from 'react-i18next';
import { SkillButton } from './skills/SkillButton';
import icons from '../util/skill_icons';


export const Skills = () => {
    const { t } = useTranslation();

    return (
        <div className='bg-linear-[232deg, #F945EE 11.9%, #F31241 64.29%]'>
            <h4 className="text-2xl mb-6">{t("skills")}</h4>
            <div className='grid grid-cols-4 align-middle gap-y-6 bg-carbon-black text-white-smoke py-8 rounded'>
                <SkillButton icon={icons.angular} label='Angular' />
                <SkillButton icon={icons.react} label='React' />
                <SkillButton icon={icons.spring} label='Spring' />
                <SkillButton icon={icons.node} label='Node.js' />
                <SkillButton icon={icons.ts} label='Typescript' />
                <SkillButton icon={icons.js} label='Javascript' />
                <SkillButton icon={icons.java} label='Java' />
                <SkillButton icon={icons.rust} label='Rust' />
                <SkillButton icon={icons.pg} label='PostgreSQL' />
                <SkillButton icon={icons.mysql} label='MySQL' />
                <SkillButton icon={icons.docker} label='Docker' />
                <SkillButton icon={icons.figma} label='Figma' />
            </div>
        </div>
    )
}
