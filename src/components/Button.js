import React, { useContext } from 'react'
import ThemeContex from '../context/ThemeContex'

function Button() {
    const data=useContext(ThemeContex); 
    //console.log(data);

    const {theme, setTheme}=useContext(ThemeContex);
  return (
    <div>Button<br />
    <div>Active Theme : {data.theme}</div>
    <div>Active Theme : {theme}</div>
    <button onClick={() => setTheme(theme==="light"?"dark":"light")}>Change Theme</button>
    </div>
  ) 
}

export default Button