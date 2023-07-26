import React, { useState } from "react";
import { useContext } from "react";
//Creamos el contexto y lo exportamos
export const MainContext = React.createContext();
export const useMainContextProvider = () => useContext(MainContext); //HOOK PERSONALIZADO: Función que retorna el mainContext. Podemos hacer lo mismo con otros contextos.

const MainContextProvider = ({ children }) => {
  // Dento del atributo value es donde vamos a pasar lo que querramos importando hook useContex en el componente hijo
  // const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  // const [user, setUser] = useState(null);
  // const cambiarLogin = () => {
  //   if (user) {
  //     setUser(null);
  //   } else {
  //     setUser({ name: "Pablo", age: 23 });
  //   }
  // };

  //Lo tendría que pasar en un 3º contexto?
  const [defaultState, setDefaultState] = useState({
    isLoggedIn: false,
    darkMode: false,
    user: "Anonimous",
  });

  const cambiarEstado = (newState) => {
    setDefaultState(newState)
  }

  //Envolvemos con el primer contexto y con el segundo (como los separé, ahora están en app) y pasamos los values para c/u
  return (
    <MainContext.Provider
      value={{
        defaultState
      }}>
     {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
