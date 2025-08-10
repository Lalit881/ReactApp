import React, { useEffect, useState } from "react";

function useDarkMode(){
    const getIntialtheme = () =>{
        const stored = localStorage.getItem('theme')
        if (stored) return stored;
        //system use theme
        const prefersDark = window.matchMedia('(prefers-color-schema: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getIntialtheme);

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme);
    },[theme])

    const toggleTheme = () =>{
        setTheme(prev => (prev === 'dark'? 'light': 'dark'));
        // in this line prev stand for previous state value of the them
    }

    return [theme, toggleTheme];

}

function ThemeToggler(){
    const [theme, toggleThem] = useDarkMode();

    return(
        <button onClick={toggleThem}>
            switch to {theme === 'dark'?'light':'dark'} Mode
        </button>
    )
}

export default ThemeToggler;
