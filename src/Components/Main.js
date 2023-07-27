import React, { useContext, useEffect } from "react";
import styles from "../styles/main.module.css";
import { useMainContextProvider } from "@/Context/MainContextProvider";
import { useUserContextProvider } from "@/Context/UserContextProvider";
import { Button } from "react-bootstrap";
import { CartContext } from "@/Context/CartContext";
import data from "../Data/Data.json";

//Para usar contexto
//Import useContext
//Importar el contexto a usar(ej MainContext)
//declarar la const donde traemos el dato usando useContext()
//Usamos un condicional para mostrar o no el usuario
const Main = (  ) => {

  // let { defaultState } = useMainContextProvider();
  // let { usuario } = useUserContextProvider();
  // let { saludo } = useUserContextProvider();
  // let { nuevoUser } = useUserContextProvider();
  // let { setUsername } = useUserContextProvider();
  // let { guardar } = useUserContextProvider();
  let { handleOnload } = useUserContextProvider();

  // var { setUsuario } = useUserContextProvider();
  // var { newUserName } = useUserContextProvider();

  handleOnload();
  
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.titulo}>Pedí Ya</h1>
        <div className={styles.banner}>Banner</div>
        <main className={styles.principal}>
          <div style={{ display: "flex", justifyContent: "center" }}>
          
          </div>
        </main>
        <div className={styles.productos}></div>
      </div>
    </>
  );
};

export default Main;
