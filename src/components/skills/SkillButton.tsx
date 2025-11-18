
interface Props {
    icon: string,
    label: string
}

export const SkillButton = ({ icon, label }: Props) => {
    return (
        <div
            className="flex flex-col gap-3 items-center rounded max-w-max mx-auto"
        >
            <img className="size-8 sm:size-9" src={icon} alt={icon} />
            <p className="hidden sm:block">{label}</p>
        </div>
    )
}
