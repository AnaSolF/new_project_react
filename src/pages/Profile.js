import React from "react";
import { useState, useEffect } from "react";
import { useUserContextProvider } from "@/Context/UserContextProvider";
import styles from "../styles/profile.module.css";
import Header from "@/Components/Header";
import { useRouter } from "next/router";
import { useMainContextProvider } from "@/Context/MainContextProvider";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";

const Profile = (props) => {
  var { usuario } = useUserContextProvider();
  var { setId } = useUserContextProvider();
  var { nuevoUsuario } = useUserContextProvider();
  var { guardar } = useUserContextProvider();
  //var { getUser } = useUserContextProvider();
  var id = usuario.id;
  var username = usuario.username;
  var bio = usuario.bio;
  var avatarUrl = usuario.avatarUrl;
  var state = usuario.state;
  var address = usuario.address;
  var zip = usuario.zip;

  let { setUsername } = useUserContextProvider();
  let { setEmail } = useUserContextProvider();
  let { setBio } = useUserContextProvider();
  let { setAvatarUrl } = useUserContextProvider();
  let { setAddress } = useUserContextProvider();
  let { setState } = useUserContextProvider();
  let { setZip } = useUserContextProvider();

  let [data, setData] = useState([]);
  const router = useRouter("");

  let { isLoggedIn } = useMainContextProvider();
  let { setIsLoggedIn } = useMainContextProvider();

  const logOut = () => {
    setIsLoggedIn(false);
    router.push("/");
  };

  useEffect(() => {
    //Traer servicio de firestore
    //Crear un puntero al dato que queremos traer
    //Traer el dato con una promesa
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, "AvatarMin");
    getDocs(queryCollection).then((res) =>
      setData(res.docs.map((avatar) => ({ id: avatar.id, ...avatar.data() })))
    );
  }, []);

  //Modificar usuario
  const modificar = async () => {
    let db = getFirestore();
    var queryDoc = doc(db, "usuarios", "KEE2D92TAlqu0xGFmEPF"); //Apuntar al documento
    await setDoc(queryDoc, {
      username: usuario.username,
      bio: usuario.bio,
      avatarUrl: usuario.avatarUrl,
      address: usuario.address,
      state: usuario.state,
      zip: usuario.zip,
    });
  };

  return (
    <>
      <Header />
      <div className={styles.Sidebar}>
        <h2> Completa tus datos </h2>
        <br />
        <Form>
          <FloatingLabel label="username">
            <Form.Control
              type="text"
              placeholder="username"
              required
              id="username"
              value={usuario.username}
              onChange={(e) => {
                const { value } = e.target;
                e.preventDefault;
                setUsername(value);
              }}
            />
            <br />
          </FloatingLabel>
          <FloatingLabel label="bio">
            <Form.Control
              type="text"
              placeholder="bio"
              required
              id="bio"
              value={usuario.bio}
              onChange={(e) => {
                const { value } = e.target;
                e.preventDefault;
                setBio(value);
              }}
            />
            <br />
          </FloatingLabel>
          <FloatingLabel label="address">
            <Form.Control
              type="text"
              placeholder="address"
              required
              id="bio"
              value={usuario.address}
              onChange={(e) => {
                const { value } = e.target;
                e.preventDefault;
                setAddress(value);
              }}
            />
            <br />
          </FloatingLabel>
          <FloatingLabel label="state">
            <Form.Control
              type="text"
              placeholder="state"
              required
              id="state"
              value={usuario.state}
              onChange={(e) => {
                const { value } = e.target;
                e.preventDefault;
                setState(value);
              }}
            />
            <br />
          </FloatingLabel>
          <FloatingLabel label="zip">
            <Form.Control
              type="text"
              placeholder="zip"
              required
              id="zip"
              value={usuario.zip}
              onChange={(e) => {
                const { value } = e.target;
                e.preventDefault;
                setZip(value);
              }}
            />
            <br />
          </FloatingLabel>
        </Form>
        <br />
      </div>
      <h6 style={{ textAlign: "center", marginBottom: "30px" }}>Avatar</h6>
      <div className={styles.av}>
        {data.map((avatar, key) => (
          <div key={avatar.id} className={styles.avatars}>
            <div className={styles.avatar}>
              <img
                src={avatar.avatarUrl}
                style={{ width: "100px", height: "100px" }}
                onClick={() => setAvatarUrl(avatar.avatarUrl)}
              ></img>
            </div>
          </div>
        ))}
      </div>
      <Button
        style={{ float: "right", marginRight: "30px" }}
        onClick={() => {
          modificar();
          router.push("/Sesion");
        }}
      >
        Modificar
      </Button>
    </>
  );
};

export default Profile;
