import React, { useContext,useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'
import '../style.css';

export default function ContentComponent() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
    }, [theme]);

  return (
    <div>
        Current Theme: {theme}
        <br/>
        <button onClick={toggleTheme}>Toggle Theme</button>

    </div>
  )
}