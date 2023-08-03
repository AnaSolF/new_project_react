import React from "react";
import { useContext, setContext } from "react";
import { useState } from "react";

export const UserContext = React.createContext();
export const useUserContextProvider = () => useContext(UserContext); //Otro HOOK personalizado par pasar función
const UserContextProvider = ({ children }) => {
  //Pasar objeto como array
  var [usuario, setUsuario] = useState({
    id: "",
    username: "",
    bio: "",
    avatarUrl: "",
    address: "",
    state: "",
    zip: "",
  });

  //Seter objeto usuario completo

  const nuevoUsuario = (
    newId,
    newUsername,
    newBio,
    newAvataUrl,
    newAddress,
    newState,
    newZip
  ) =>
    setUsuario({
      ...usuario,
      id: newId,
      username: newUsername,
      bio: newBio,
      avatarUrl: newAvataUrl,
      address: newAddress,
      state: newState,
      zip: newZip,
    },
    guardar()
    );

  //Separo los seter de las propiedades del objeto, para poder capturar los valores de los inputs

  const setId = (newId) => {
    setUsuario({
      ...usuario,
      id: newId,
    }) 
  }

  const setEmail = (newEmail) =>
    setUsuario({
      ...usuario,
      email: newEmail,
    });

  const setPass = (newPass) =>
    setUsuario({
      ...usuario,
      password: newPass,
    });

  const setUsername = (newUsername) =>
    setUsuario({
      ...usuario,
      username: newUsername,
    });

  const setBio = (newBio) =>
    setUsuario({
      ...usuario,
      bio: newBio,
    });

  
  const setAvatarUrl = (newAvatarUrl) =>
    setUsuario({
      ...usuario,
      avatarUrl: newAvatarUrl,
    },
    );
  

  const setAddress = (newAddress) => {
    setUsuario({
      ...usuario,
      address: newAddress,
    });
  };

  const setState = (newState) => {
    setUsuario({
      ...usuario,
      state: newState,
    });
  };

  const setZip = (newZip) => {
    setUsuario({
      ...usuario,
      zip: newZip,
    });
  };

  const guardar = () => {
    if (typeof window !== "undefined")
    {localStorage.setItem("usuario", JSON.stringify(usuario));}
  };
   
  return (
    <UserContext.Provider
      value={{
        usuario,
        setEmail,
        setPass,
        setUsername,
        setBio,
        setAvatarUrl,
        setAddress,
        setState,
        setZip,
        guardar,
        nuevoUsuario,
        setUsuario,
        setId
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
