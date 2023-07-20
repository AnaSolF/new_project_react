import React, { useState } from "react";
import { useContext, setContext } from "react";
import { Button } from "react-bootstrap";
//Creamos el contexto y lo exportamos
export const MainContext = React.createContext();
// export const CartContext = React.createContext();
//console.log(CartContext)

export const useMainContextProvider = () => useContext(MainContext);//HOOK PERSONALIZADO: Función que retorna el mainContext. Podemos hacer lo mismo con otros contextos.
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
  function cambiarNombre(newName) {
    setName(newName);
  }

  return (
    <MainContext.Provider value={user}>
      {children}
      <div style={{ display: "flex", justifyContent: "center" }}>
      <Button 
        onClick={(e) => {
          cambiarLogin();
        }}
      >
        Cambiar nombre
      </Button>
      </div>
    
    </MainContext.Provider>
  );
};

export default MainContextProvider;
