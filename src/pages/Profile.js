import React from "react";
import { useState, useEffect } from "react";
import { useUserContextProvider } from "@/Context/UserContextProvider";
import { Button } from "react-bootstrap";
import styles from "../styles/profile.module.css";
import Header from "@/Components/Header";
import { useRouter } from "next/router";
import { useMainContextProvider } from "@/Context/MainContextProvider";
import { Nav, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

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
      <Form>
              <FloatingLabel label="Email address" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => {
                    const { value } = e.target;
                    e.preventDefault;
                    setEmail(value);
                  }}
                />
              </FloatingLabel>
              <FloatingLabel label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  id="password"
                  value={password}
                  onChange={(e) => {
                    const { value } = e.target;
                    e.preventDefault;
                    setPassword(value);
                  }}
                />
              </FloatingLabel>
            </Form>
           

        <Button onClick={() => logged()}>Hola</Button>
        <Button onClick={() =>DataUserRoute() }>DataUser</Button>
      </div>
    </>
  );
};

export default Profile;
