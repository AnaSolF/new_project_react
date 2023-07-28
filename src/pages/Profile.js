import React from 'react'
import { useState, useEffect } from 'react';
import { useUserContextProvider } from '@/Context/UserContextProvider';
import { Button } from 'react-bootstrap';
import styles from "../styles/profile.module.css"
import Header from '@/Components/Header';

const Profile = () => {
  // var { newUserName } = useUserContextProvider();
  // var { saludo } = useUserContextProvider();
  
  // useEffect(() => {
  //   newUserName
  // }, [])

  return (
    <>
      <Header />
      <div className={styles.Sidebar}>
        {/* <div> Hola {`${newUserName}`}</div> */}
   
      <Button style={{
          width: "100px", margin: "0 auto"
        }} onClick={() => { }}>Prueba</Button>
      </div>
      </>
  );
}

// function Content() {
//   return (
//     <div class="Content">
//       <h2>Proyectos</h2>
//     </div>
//   );
// }

export default Profile
