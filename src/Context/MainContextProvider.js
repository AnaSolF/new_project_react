import React, { useState } from "react";
import { useContext } from "react";

//Creamos el contexto y lo exportamos
export const MainContext = React.createContext();
export const useMainContextProvider = () => useContext(MainContext); //HOOK PERSONALIZADO: Función que retorna el mainContext. Podemos hacer lo mismo con otros contextos.

const MainContextProvider = ({ children }) => {
 
  const [defaultState, setDefaultState] = useState({
    isLoggedIn: false,
    darkMode: false,
  });

  const nuevoEstado = (newIsLoggedIn, newDarkMode) => 
    setDefaultState(
      {...defaultState,
        isLoggedIn: newIsLoggedIn,
        darkMode: newDarkMode
      }
    )
  
  const setDarkmode = (newDarkMode) =>
    setDefaultState(
      { ...defaultState,
        darkMode: newDarkMode  
    }
  )
  
  const setIsLoggedIn = (newIsLoggedIn) =>
    setDefaultState(
      {...defaultState,
        isLoggedIn: newIsLoggedIn
      }
    )
  
  const guardarState = () => {
    if (typeof window !== "undefined")
    {  localStorage.setItem("defaultState", JSON.stringify(defaultState));}
    };
  
  //Envolvemos con el primer contexto y con el segundo (como los separé, ahora están en app) y pasamos los values para c/u
  return (
    <MainContext.Provider
      value={{
        defaultState,
        nuevoEstado,
        setDarkmode,
        setIsLoggedIn,
        guardarState
      }}>
     {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
