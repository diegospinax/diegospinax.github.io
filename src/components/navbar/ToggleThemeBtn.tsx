import { useTheme } from "../../hooks/useTheme";


export const ToggleThemeBtn = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            toggle
        </button>
    )
}
