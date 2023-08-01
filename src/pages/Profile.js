import React from "react";
import { useState, useEffect } from "react";
import { useUserContextProvider } from "@/Context/UserContextProvider";
import { Button } from "react-bootstrap";
import styles from "../styles/profile.module.css";
import Header from "@/Components/Header";
import { useRouter } from "next/router";
import { useMainContextProvider } from "@/Context/MainContextProvider";

const Profile = () => {
  // var { newUserName } = useUserContextProvider();
  // var { saludo } = useUserContextProvider();

  // useEffect(() => {
  //   newUserName
  // }, [])

  const router = useRouter("");
  let { isLoggedIn } = useMainContextProvider();
  let { setIsLoggedIn } = useMainContextProvider();

  const logged = () => {
    if(isLoggedIn=false)
    setIsLoggedIn(true);
    return isLoggedIn
  };

  const logOut = () => {
    setIsLoggedIn(false);
    router.push("/");
  };

  const DataUserRoute = () => {
    router.push("/DataUser");
  };


  return (
    <>
      <Header />
      <div className={styles.Sidebar}>
        {/* <div> Hola {`${newUserName}`}</div> */}

        <Button onClick={() => logged()}>Hola</Button>
        <Button onClick={() =>DataUserRoute() }>DataUser</Button>
      </div>
    </>
  );
};

export default Profile;
