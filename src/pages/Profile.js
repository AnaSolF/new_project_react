import React from 'react'
import { useState } from 'react';
import { useUserContextProvider } from '@/Context/UserContextProvider';
import { Button } from 'react-bootstrap';
import styles from "../styles/profile.module.css"
import data from "../Data/Data.json";
import Header from '@/Components/Header';

const Profile = () => {

  var { usuario } = useUserContextProvider();
  var { setUsuario } = useUserContextProvider();
  var { newUserName } = useUserContextProvider();
  var { saludo } = useUserContextProvider();
  let { nuevoUser } = useUserContextProvider();
  const { userLoad } = data;
  let usDat = userLoad.username;
  usDat = newUserName;
  let { handleOnload } = useUserContextProvider();
  
  
  handleOnload();
  
  return (
    <><Header />
    <div className={styles.Sidebar}>
      {/* {usuario.map((propiedad) => {
        return (<div className={styles.user} key={propiedad.id}>
        <img style={{width:"100px", height:"100px"}} alt="Profile" src={propiedad.avatarUrl} />
        <h2>{propiedad.name}</h2>
        <h1>{propiedad.username}</h1>
        <div>
          Seguidores: {propiedad.followers}, Seguidos: {propiedad.following}, Estrellas:{" "}
          {propiedad.stars}
        </div>
        </div>)
      })} */}
      <Button style={{
          width: "100px", margin: "0 auto"
        }} onClick={() => { }}>Prueba</Button>
      </div>
      </>
  );
}
function Content() {
  return (
    <div class="Content">
      <h2>Proyectos</h2>
    </div>
  );
}

export default Profile
