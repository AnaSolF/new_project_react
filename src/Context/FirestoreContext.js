import React, { useState } from "react";
import { useContext } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  getData,
  addDoc,
} from "firebase/firestore";

export const FirestoreContext = React.createContext();
export const useFirestoreContextProvider = () => useContext(FirestoreContext);
const FirestoreContextProvider = ({ children }) => {
  const saludo = () => {
    console.log("Hola");
  };
  //Traer función para obtener datos desde Firestore
  //Traer servicio de firestore
  //Crear un puntero al dato que queremos traer
  //Traer el dato con una promesa

  // const getUser = () => {
  //   var [data, setData] = useState([]);
  //   const queryDb = getFirestore();
  //   const queryCollection = collection(queryDb, "usuarios");
  //   getDocs(queryCollection).then((res) =>
  //     setData(
  //       res.docs.map((usuario) => ({ id: usuario.id, ...usuario.data() }))
  //     )
    
  //   );
  // };

  return (
    <FirestoreContext.Provider value={{ saludo }}>
      {children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreContextProvider;
