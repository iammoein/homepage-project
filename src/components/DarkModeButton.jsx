export default function DarkModeButton({ darkMode, toggleDarkMode }) {
  return (
    <>
      <label
        htmlFor="toggle"
        className="relative inline-block w-14 h-8 cursor-pointer"
      >
        <input
          type="checkbox"
          id="toggle"
          className="sr-only peer"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-accent-color"></div>
        <div className="absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 translate-x-0 peer-checked:translate-x-6 flex items-center justify-center">
          <span className="text-sm text-gray-700 peer-checked:hidden">🌙</span>
        </div>
      </label>
    </>
  );
}
