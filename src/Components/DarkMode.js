import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "../styles/Home.module.css"


// Lo pasamos a funcional al tener contexto...
export default function Darkmode(props) {
  const { darkMode, setDarkmode } = useContext(myContext);
  let [isToggleOn, setToggle] = useState({ darkMode });

  return (
    <>
      <Button
        variant=""
        className=""
        onClick={() => {
          setToggle(!isToggleOn);
          setDarkmode(isToggleOn);
        }}
      >
        {isToggleOn ? a : b }
      </Button>
    </>
  );
}