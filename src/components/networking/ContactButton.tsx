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
            className="flex gap-2.5 px-3 py-1.5 items-center bg-charcoal-blue rounded max-w-max text-white-smoke">
            {children}
        </a>
    )
}
