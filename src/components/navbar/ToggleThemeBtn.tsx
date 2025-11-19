import { useTheme } from "../../hooks/useTheme";
import clsx from "clsx";

export const ToggleThemeBtn = () => {
    const { toggleTheme, isDarkMode } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={clsx(
                "relative flex items-center h-8 w-16 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lilac-ash focus:ring-offset-2",
                isDarkMode ? "bg-charcoal-blue ring-offset-carbon-black" : "bg-lilac-ash/40 ring-offset-white-smoke"
            )}
            aria-label="Toggle Theme"
        >
            {/* Sun Icon (Visible in Light Mode on the left) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={clsx(
                    "absolute left-2 h-4 w-4 stroke-yellow-300 fill-yellow-300 transition-opacity duration-300",
                    isDarkMode ? "opacity-100" : "opacity-0"
                )}
            >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>

            {/* Moon Icon (Visible in Dark Mode on the right) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={clsx(
                    "absolute right-2 h-4 w-4 fill-lilac-ash-dark transition-opacity duration-300",
                    !isDarkMode ? "opacity-100" : "opacity-0"
                )}
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>

            {/* Sliding Knob */}
            <span
                className={clsx(
                    "h-6 w-6 rounded-full bg-white-smoke shadow-md transform transition-transform duration-300 flex items-center justify-center",
                    isDarkMode ? "translate-x-8 bg-lilac-ash-dark" : "translate-x-0"
                )}
            >
                {/* Optional: Icon inside knob if desired, currently clean knob */}
            </span>
        </button>
    )
}
