import React, { useEffect, useState } from "react";
import { useUserContextProvider } from "@/Context/UserContextProvider";
import { useRouter } from "next/router";
import { getFirestore, getDocs, collection, getData, addDoc } from "firebase/firestore";
import { appInit, db } from "../Firebase/InitConfig";
import { Button } from "react-bootstrap";

const DataUser = () => {
  var { usuario } = useUserContextProvider();
  var { setUsuario } = useUserContextProvider();
  //var { getUser } = useUserContextProvider();
  let { guardar } = useUserContextProvider();
  const router = useRouter();
  let [data, setData] = useState([]);

  let usuarioUno = {
    username: "Pablo",
    bio: "Chef",
    avatarUrl: "",
    address: "Los Pinos 2345",
    email: "pablo@mail.com",
    password: "pablito123",
    state: "Chile",
    zip: "2345",
  };

//TRAER DATOS DESDE FIRESTORE
  useEffect(() => {
    //Traer servicio de firestore
    //Crear un puntero al dato que queremos traer
    //Traer el dato con una promesa
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, "usuarios");
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((usuario) => ({ id: usuario.id, ...usuario.data() }))
      )
    );
    //getUser()

  }, []);


  //Posteamos usuario en base de datos!!!!!!
  const docRef = async () => {
    let db = getFirestore();
    await addDoc(collection(db, "usuarios"), {
        username: "Juan",
        bio: "Profesor",
        avatarUrl: "https://iili.io/HPyjOcg.jpg",
        address: "Esmeralda 2345",
        email: "juan@mail.com",
        password: "juan123",
        state: "Argentina",
        zip: "5000",
        });}

  return (<>
  {data.map((usuario, key) => (
      <div key={usuario.id} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div>
          <img src={usuario.avatarUrl} style={{ width: "100px" }}></img>
        </div>
        <p>Usuario: {usuario.username}</p>
      </div>
    
  ))}
    <Button
    onClick={()=>{docRef()}}
    >Agregar</Button>
  </>)
};
  
export default DataUser;
