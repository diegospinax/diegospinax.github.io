import clsx from "clsx"

interface Props {
    icon: string,
    label: string
}

export const SkillButton = ({ icon, label }: Props) => {
    return (
        <div
            className="flex flex-col gap-3 items-center rounded max-w-max mx-auto"
        >
            <img className={clsx("size-8 sm:size-9",
                label === 'Javascript' && 'bg-carbon-black')} src={icon} alt={icon} />
            <p className="hidden sm:block">{label}</p>
        </div>
    )
}
