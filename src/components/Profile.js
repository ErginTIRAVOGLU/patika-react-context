import React, { useContext, useState } from "react";
//import UserContext from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";
//import ThemeContext from "../context/ThemeContext";

function Profile() { 
  //const { user, setUser } = useUser(UserContext);
  const { user, setUser } = useUser();
 // const {theme, setTheme}=useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const {theme, setTheme}=useTheme();
  //console.log(user);

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

      <br />
      <br />
      <div>Active Theme {theme}</div>
    <button onClick={() => setTheme(theme==="light"?"dark":"light")}>Change Theme</button>
    </>
  );
}

export default Profile;
