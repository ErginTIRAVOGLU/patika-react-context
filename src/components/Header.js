import React, { useState } from 'react'
import { useUser } from '../context/UserContext';
//import ThemeContext from '../context/ThemeContext';
//import UserContext from '../context/UserContext';

function Header() {
    //const {theme, setTheme} = useContext(ThemeContext);
    //const { user, setUser } = useContext(UserContext);

    const { user, setUser } = useUser();
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
          setUser({ id: 1, username: "nseven", bio: "Lorem ipsum dolar" });
          setLoading(false);
        }, 2000);
      };
      const handleLogout = () => {
        setUser(null);
      };
  return (
    <>
    {/*
    <div>Active Theme {theme}</div>
    <button onClick={() => setTheme(theme==="light"?"dark":"light")}>Change Theme</button>
  */}
    <br /><br />
    <div>Profile</div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "loading..." : "Login"}
        </button>
      )}

      <br />
      <code>{JSON.stringify(user)}</code>

      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
      <hr />
      <hr />
      <hr />
    </>
  )
}

export default Header