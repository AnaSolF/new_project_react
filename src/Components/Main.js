import React from "react";
import styles from "../styles/main.module.css";
import { useContext } from "react";
import { MainContext } from "@/Context/MainContextProvider";

//Para usar contexto
//Import useContext
//Importar el contexto a usar(ej MainContext)
//declarar la const donde traemos el dato usando useContext()
//Usamos un condicional para mostrar o no el usuario
const Main = (props) => {
  let user = useContext(MainContext);
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.titulo}>Pedí Ya</h1>
        <div className={styles.banner}>Banner</div>
        <main className={styles.principal}>
        <h1>Usuario</h1>
        {user && <p>{user.name}</p>}
        </main>
        <div className={styles.productos}></div>
      </div>
    </>
)}

export default Main;
