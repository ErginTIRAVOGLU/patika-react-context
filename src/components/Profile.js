import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

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
    </>
  );
}

export default Profile;
