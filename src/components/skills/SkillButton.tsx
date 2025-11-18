
interface Props {
    icon: string,
    label: string
}

export const SkillButton = ({ icon, label }: Props) => {
    return (
        <div
            className="flex flex-col gap-3 items-center rounded max-w-max mx-auto"
        >
            <img src={icon} alt={icon} />
            <p>{label}</p>
        </div>
    )
}
