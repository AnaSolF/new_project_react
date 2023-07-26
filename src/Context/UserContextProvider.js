import React from "react";
import { useContext, setContext } from "react";
import { useState } from "react";
export const UserContext = React.createContext();
export const useUserContextProvider = () => useContext(UserContext); //Otro HOOK personalizado par pasar función

const UserContextProvider = ({ children }) => {
  //Pasar objeto como array
  const [usuario, setUsuario] = useState({
    username: "",
    bio: "",
    avatarUrl: "",
    address: "",
    email: "",
    password: "",
    state: "",
    zip: "",
  });

  const saludo = () => {
    alert("Hola " + usuario.username);
  };

  const nuevoUsuario = (
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
      username: newUsername,
      bio: newBio,
      avatarUrl: newAvataUrl,
      address: newAddress,
      email: newEmail,
      password: newPass,
      state: newState,
      zip: newZip,
    });

  const setEmail = (newEmail) => setUsuario({ ...usuario, email: newEmail });

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
