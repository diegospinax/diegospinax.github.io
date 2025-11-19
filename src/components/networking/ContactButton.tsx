import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import clsx from 'clsx';

interface Props {
    children: React.ReactNode,
    link: string
}

export const ContactButton = ({ children, link }: Props) => {
    const { isDarkMode } = useTheme();

    return (
        <a
            href={link}
            target='_blank'
            className={clsx("flex gap-2.5 px-3 py-1.5 items-center border rounded-lg w-full sm:max-w-max transition-all duration-300",
                isDarkMode
                    ? "bg-white/5 border-charcoal-blue/20 hover:border-lilac-ash/50 hover:text-lilac-ash stroke-white-smoke hover:stroke-lilac-ash"
                    : "border-charcoal-blue hover:border-lilac-ash-dark/90 hover:text-lilac-ash-dark/90 hover:bg-lilac-ash-dark/5 stroke-charcoal-blue hover:stroke-lilac-ash-dark/90 bg-white-smoke drop-shadow"
            )}>
            {children}
        </a>
    )
}
