import { type Icon, icons } from "./skill_icons";
import aqua_img from '../assets/aqua-screenshot.png';

interface Repository {
    link: string;
    type: 'frontend' | 'backend'
}

export interface Project {
    title: string;
    description: string;
    technologies: Icon[];
    imageUrl: string;
    repositories: Repository[]
}

const aqua_stack: string[] = ["Angular", "Typescript", "Spring", "Java", "MySQL", "Docker"];
const ecotrack_stack: string[] = ["React", "Typescript", "Node.js", "PostgreSQL", "Docker"];
const medical_scheduling_stack: string[] = ["Spring", "Java", "MySQL"];

export const projectsData: Project[] = [
    {
        title: 'ecotrack.title',
        description: 'ecotrack.description',
        technologies: icons.filter((icon) => ecotrack_stack.includes(icon.label)),
        imageUrl: aqua_img,
        repositories: [
            { link: "https://github.com/diegospinax/ecotrack-api", type: "backend" },
            { link: "https://github.com/diegospinax/ecotrack-frontend", type: "frontend" }
        ]
    },
    {
        title: 'aqua.title',
        description: 'aqua.description',
        technologies: icons.filter((icon) => aqua_stack.includes(icon.label)),
        imageUrl: aqua_img,
        repositories: [
            { link: "https://github.com/diegospinax/aqua-api", type: "backend" },
            { link: "https://github.com/diegospinax/aqua", type: "frontend" }
        ]
    },
    {
        title: 'medical_scheduling.title',
        description: 'medical_scheduling.description',
        technologies: icons.filter((icon) => medical_scheduling_stack.includes(icon.label)),
        imageUrl: aqua_img,
        repositories: [
            { link: "https://github.com/diegospinax/medical-scheduling-api", type: "backend" },
        ]
    },
]