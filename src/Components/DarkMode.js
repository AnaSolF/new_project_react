import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useMainContextProvider } from "@/Context/MainContextProvider";
import { BsSunrise } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";


// Lo pasamos a funcional al tener contexto...
export default function Darkmode(props) {
  var { setDarkmode } = useMainContextProvider();
  var { defaultState } = useMainContextProvider();

  var darkMode = defaultState.darkMode

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
        {isToggleOn ? <BsSunrise /> :  <BsSunsetFill />}
      </Button>
    </>
  );
}