interface Props {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
}

export const ProjectCard = ({ title, description, technologies, imageUrl }: Props) => {
    return (
        <div className="flex flex-col md:flex-row bg-white/5 border border-charcoal-blue/20 rounded-xl overflow-hidden hover:border-lilac-ash/50 transition-all duration-300 group h-full">
            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col justify-between order-2 md:order-1">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lilac-ash transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-lilac-ash/10 text-lilac-ash border border-lilac-ash/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-48 h-48 md:h-auto relative overflow-hidden order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 to-transparent md:bg-gradient-to-l z-10" />
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>
        </div>
    );
};
