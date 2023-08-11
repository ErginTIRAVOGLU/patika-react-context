import React, { useContext } from "react";
import Button from "./Button";
import Header from "./Header";
import ThemeContext from "../context/ThemeContex";

function Container() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme==="dark"?"dark":"light"}`}>
      <Button />
      <hr />
      <Header />
    </div>
  );
}

export default Container;
