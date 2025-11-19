import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../SectionHeader';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../../util/projects_data';

export const Projects = () => {
    const { t } = useTranslation();

    return (
        <div id="projects">
            <SectionHeader content={t("projects")} />
            <div className="grid grid-cols-1 gap-6 mt-8">
                {projectsData.map((project, index) =>
                    <ProjectCard key={index} project={project} />
                )}
            </div>
        </div>
    )
}
