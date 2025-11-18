import React from 'react'

interface Props {
    children: React.ReactNode,
    link: string
}

export const ContactButton = ({ children, link }: Props) => {
    return (
        <a
            href={link}
            target='_blank'
            className="flex gap-2.5 px-3 py-1.5 items-center bg-white/5 border border-charcoal-blue/20 rounded-lg w-full sm:max-w-max text-gray-300 hover:border-lilac-ash/50 hover:text-lilac-ash transition-all duration-300">
            {children}
        </a>
    )
}
