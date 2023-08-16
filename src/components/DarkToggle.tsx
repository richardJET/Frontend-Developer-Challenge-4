
interface DarkToggleProps {
    toggleDarkModeHandler: () => void;
    toggleDarkMode: boolean;
}

export default function DarkToggle({ toggleDarkModeHandler, toggleDarkMode }: DarkToggleProps){
    return (
        <div
            className={`d-flex align-items-center justify-content-center me-2`}>
            <button
                className={`btn ${toggleDarkMode ? 'bg-info' : 'bg-black'}`}
                onClick={() => toggleDarkModeHandler()}
            >
                {toggleDarkMode ? '🔆' : '🌙'}
            </button>
        </div>
    );
};