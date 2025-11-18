import { useTheme } from "../../hooks/useTheme";


export const ToggleThemeBtn = () => {
    const { toggleTheme } = useTheme();

    return (
        <div >
            <button onClick={toggleTheme}>
                Clickme to change theme
            </button>
        </div>

    )
}
