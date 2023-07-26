import React, { useContext, useEffect } from "react";
import styles from "../styles/main.module.css";
import { useMainContextProvider } from "@/Context/MainContextProvider";
import { useUserContextProvider } from "@/Context/UserContextProvider";
import { Button } from "react-bootstrap";
import { CartContext } from "@/Context/CartContext";

//Para usar contexto
//Import useContext
//Importar el contexto a usar(ej MainContext)
//declarar la const donde traemos el dato usando useContext()
//Usamos un condicional para mostrar o no el usuario
const Main = (props) => {
  let { defaultState } = useMainContextProvider();
  let { usuario } = useUserContextProvider();
  let { saludo } = useUserContextProvider();
  let { nuevoUser } = useUserContextProvider();
  
  var newUserName = nuevoUser()
  console.log(newUserName)
   
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.titulo}>Pedí Ya</h1>
        <div className={styles.banner}>Banner</div>
        <main className={styles.principal}>
          <h2>{newUserName}</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={(e) => {
                nuevoUser();
              }}
            >
              Cambiar nombre
            </Button>
          </div>
        </main>
        <div className={styles.productos}></div>
      </div>
    </>
  );
};

export default Main;
