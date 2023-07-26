import React from "react";
import { useContext, setContext } from "react";
import { useState } from "react";
export const UserContext = React.createContext();
export const useUserContextProvider = () => useContext(UserContext); //Otro HOOK personalizado par pasar función

const UserContextProvider = ({ children }) => {
  //Pasar objeto como array
  let [usuario, setUsuario] = useState({
    //id: "",
    username: "",
    bio: "",
    avatarUrl: "",
    address: "",
    email: "",
    password: "",
    state: "",
    zip: "",
  });

  const saludo = (newUserName) => {
    alert("Hola " + newUserName);
  };

  //Seter objeto usuario completo

  const nuevoUsuario = (
   // newId,
    newUsername,
    newBio,
    newAvataUrl,
    newAddress,
    newEmail,
    newPass,
    newState,
    newZip
  ) =>
    setUsuario({
      ...usuario,
     // id: newId,
      username: newUsername,
      bio: newBio,
      avatarUrl: newAvataUrl,
      address: newAddress,
      email: newEmail,
      password: newPass,
      state: newState,
      zip: newZip,
    });

  
  //Separo los seter de las propiedades del objeto, para poder capturar los valores de los inputs
  //El set de id no se
  // const setId = (newId) =>
  //   setUsuario({
  //     ...usuario,
  //     id: newId
  //   });

  const setEmail = (newEmail) =>
    setUsuario({
      ...usuario,
      email: newEmail
    });

  const setPass = (newPass) =>
    setUsuario({
      ...usuario,
      password: newPass
    });

  const setUsername = (newUsername) =>
    setUsuario({
      ...usuario,
      username: newUsername,
    });

  const setBio = (newBio) =>
    setUsuario({
      ...usuario,
      bio: newBio
    });

  const setAvatarUrl = (newAvatarUrl) =>
    setUsuario({
      ...usuario,
      avatarUrl: newAvatarUrl
    });

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
    localStorage.setItem("usuario", JSON.stringify(usuario));
  };

  const nuevoUser = () => {
    if (typeof window !== "undefined") {
      // Obtener el objeto almacenado en el localStorage
      let usuario = localStorage.getItem("usuario");
      if (usuario) {
        // Convertir el objeto JSON a un objeto JavaScript
        usuario = JSON.parse(usuario);
        var newUserName = usuario.username
        return newUserName;
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        usuario,
        saludo,
        setEmail,
        setPass,
        setUsername,
        setBio,
        setAvatarUrl,
        setAddress,
        setState,
        setZip,
        guardar,
        //getUser,
        //setId,
        nuevoUsuario,
        nuevoUser
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
