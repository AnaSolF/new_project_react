import React, { useContext, useEffect } from "react";
import styles from "../styles/main.module.css";
import { useMainContextProvider } from "@/Context/MainContextProvider";
import { useUserContextProvider } from "@/Context/UserContextProvider";
import { Button } from "react-bootstrap";
import { CartContext } from "@/Context/CartContext";
import SocialLogin from "./SocialLogin";


const Main = (  ) => {
  var { guardarState } = useMainContextProvider();
  guardarState()
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.titulo}>My Flavor</h1>
        <div className={styles.banner}>Banner</div>
        <main className={styles.principal}>
          <div style={{ display: "flex", margin:"0 auto", flexDirection:"column", width:"80%" }}>
          <SocialLogin />
          </div>
        </main>
        <div className={styles.productos}></div>
      </div>
    </>
  );
};

export default Main;
