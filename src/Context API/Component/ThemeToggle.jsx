import useTheme from "../Hook/useTheme";

const ThemeToggle = () => {
const {theme, toggleTheme} = useTheme();

// const toogleTheme = () =>{

// }

return(
    <button onClick={toggleTheme}>
        Switch to {theme === 'light'? 'dark' : 'light'} Mode
    </button>
)
}

export default ThemeToggle;