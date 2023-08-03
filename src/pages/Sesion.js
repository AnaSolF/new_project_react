import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/sesion.module.css";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Header from "@/Components/Header";
import { appInit } from "../Firebase/InitConfig";

const Sesion = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const queryDb = getFirestore(); //Traer Firestore
    var queryDoc = doc(queryDb, "usuarios", "KEE2D92TAlqu0xGFmEPF"); //Apuntar al documento
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, []);
  return (
    <>
      <div className="cont">
        <Header />
        <div className={styles.banner}>
          <div className={styles.avatarDiv}>
            <img src={data.avatarUrl} className={styles.foto}></img>
            <p className={styles.username}>{data.username}</p>
          </div>
        </div>
        <div>Receta</div>
      </div>
    </>
  );
};

export default Sesion;
