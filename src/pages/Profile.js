import React from 'react'
import { useState } from 'react';
import { useMainContextProvider, useUserToggleContext } from '@/Context/MainContextProvider';
import { Button } from 'react-bootstrap';
import styles from "../styles/profile.module.css"
const Profile = () => {

  let usuario = useMainContextProvider();
  const saludo = useUserToggleContext()

  return (
    <div className={styles.Sidebar}>
      {usuario.map((propiedad) => {
        return (<div className={styles.user} key={propiedad.id}>
        <img style={{width:"100px", height:"100px"}} alt="Profile" src={propiedad.avatarUrl} />
        <h2>{propiedad.name}</h2>
        <h1>{propiedad.username}</h1>
        <div>
          Seguidores: {propiedad.followers}, Seguidos: {propiedad.following}, Estrellas:{" "}
          {propiedad.stars}
        </div>
        
        </div>)
      })}
      <Button style={{
        width: "100px", margin: "0 auto"}} onClick={() => { saludo() }}>Saludar</Button>
    </div>
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

//Necesita recibir algunas variables y funciones del contexto inicial y setearlas
//isLoggedIn
//userName
//Ver Cart 
//Agregar Imagen de perfil (Ver si acceder a banco de imágenes o subir)