import React from "react";
import { useContext, setContext } from "react";
import { useState } from "react";
export const UserContext = React.createContext();
export const useUserContextProvider = () => useContext(UserContext); //Otro HOOK personalizado par pasar función

const UserContextProvider = ({ children }) => {
  //Pasar objeto como array
  const [usuario, setUsuario] = useState({
    id: 1,
    username: "asf7707",
    name: "Ana Sol Franchisena",
    bio: "Full Stack Developer",
    avatarUrl: "https://iili.io/HQHh8QV.jpg",
    adress: "",
    email: "",
    password: "",
    state: "",
    zip: 0,
    checkbox: false,
  });

  const saludo = () => { alert("Hola " + usuario.username)};
//   const cambiarUsuario = (usuario) => {
//     setUsuario({
//       id: 0,
//       username: "",
//       name: "",
//       bio: "",
//       avatarUrl: "",
//       adress: "",
//       email: "",
//       state: "",
//       zip: 0,
//       checkbox: false,
//     });
    //     };
  
  return (
    <UserContext.Provider value={{
      usuario,
      saludo
    }}>
        {children}
      </UserContext.Provider>
  );
};

export default UserContextProvider;
