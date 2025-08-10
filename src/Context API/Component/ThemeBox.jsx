import useTheme from "../Hook/useTheme"

const ThemeBox = () => {
    const {theme} = useTheme();

    const style = {
        padding: '20px',
        margin: '20px',
        textAlign: 'center',
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        borderColor: theme === 'light' ? '#ccc' : '#555',
    }

    return (
    <div style={style}>
        This Box is  in {theme} mode.
    </div>
    )
}

export default ThemeBox;