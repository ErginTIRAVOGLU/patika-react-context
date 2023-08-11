import React from 'react'
import { useTheme } from '../context/ThemeContext';
//import ThemeContex from '../context/ThemeContext'


function Button() {
    const data=useTheme(); 
    //console.log(data);

    const {theme, setTheme}=useTheme();
  return (
    <div>Button<br />
    <div>Active Theme : {data.theme}</div>
    <div>Active Theme : {theme}</div>
    <button onClick={() => setTheme(theme==="light"?"dark":"light")}>Change Theme</button>
    </div>
  ) 
}

export default Button