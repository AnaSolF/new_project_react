import React from "react";
import styles from "../styles/main.module.css";
import { useMainContextProvider, useUserToggleContext } from "@/Context/MainContextProvider";
import { Button } from "react-bootstrap";

//Para usar contexto
//Import useContext
//Importar el contexto a usar(ej MainContext)
//declarar la const donde traemos el dato usando useContext()
//Usamos un condicional para mostrar o no el usuario
const Main = (props) => {
  let user = useMainContextProvider();
  let cambiarLogin = useUserToggleContext();
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.titulo}>Pedí Ya</h1>
        <div className={styles.banner}>Banner</div>
        <main className={styles.principal}>
          <h1>Usuario</h1>
          {user && <p>{user.name}</p>}
          <div style={{ display: "flex", justifyContent: "center" }}>
      <Button 
        onClick={(e) => {
          cambiarLogin();
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
