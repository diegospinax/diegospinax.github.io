import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../SectionHeader';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    const { t } = useTranslation();

    return (
        <div>
            <SectionHeader content={t("projects")} />
            <div className="grid grid-cols-1 gap-6 mt-8">
                <ProjectCard
                    title="Project Name Placeholder"
                    description="This is a brief description of the project. It highlights the key features and the problem it solves. The text here is just a placeholder for the actual project details."
                    technologies={["React", "TypeScript", "Tailwind CSS"]}
                    imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                />
                <ProjectCard
                    title="Another Awesome Project"
                    description="Another project description goes here. This demonstrates how multiple cards look when stacked. The layout is responsive and adapts to different screen sizes."
                    technologies={["Node.js", "Express", "MongoDB"]}
                    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                />
            </div>
        </div>
    )
}
