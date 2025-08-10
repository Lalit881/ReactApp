import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const useTheme = () => useContext(ThemeContext);

export default useTheme;