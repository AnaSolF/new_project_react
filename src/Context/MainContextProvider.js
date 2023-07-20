import React, { useState } from "react";
import { useContext, setContext } from "react";
//Creamos el contexto y lo exportamos
export const MainContext = React.createContext();
// export const CartContext = React.createContext();

export const UserToggleContext = React.createContext();


export const useMainContextProvider = () => useContext(MainContext);//HOOK PERSONALIZADO: Función que retorna el mainContext. Podemos hacer lo mismo con otros contextos.
export const useUserToggleContext = () => useContext(UserToggleContext); //Otro HOOK personalizado par pasar función
export const MainContextProvider = ({ children }) => {
  // Dento del atributo value es donde vamos a pasar lo que querramos importando hook useContex en el componente hijo
  
  const [user, setUser] = useState(null);
  const cambiarLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({ name: "Pablo", age: 23 });
    }
  };
  
//Envolvemos con el primer contexto y con el segundo y pasamos los values para c/u
  return (
    <MainContext.Provider value={user}>
      <UserToggleContext.Provider value={cambiarLogin}>  
      {children}
      </UserToggleContext.Provider>
    </MainContext.Provider>
  );
};

export default MainContextProvider;
