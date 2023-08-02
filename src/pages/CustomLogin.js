import React from "react";
import button from "react-bootstrap";
import styles from "@/styles/Login.module.css";
import { ButtonGroup, Nav } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useRouter } from 'next/router'
import { app } from "../Firebase/InitConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useMainContextProvider } from "@/Context/MainContextProvider";


const CustomLogin = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  
  // let { isLoggedIn }= useMainContextProvider();

//  console.log(isLoggedIn)
  function validateEmail(email) {
    // Validar el formato del correo electrónico utilizando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    // Validar contraseña
    return (password.length >= 6 && password !== null);
  }

  function handleRegister(email, password) {
    if (!validateEmail(email)) {
      alert("Ingrese un email válido");
    }

    if (!validatePassword(password)) {
      alert("Ingrese una contraseña de más de 8 caracteres");
    }
  }
    
  function Autenticacion() {
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const user = credentials.user;
        handleRegister(email, password)
        alert("Será redireccionado a su Sesión")
        console.log(user)
        if (user) {
          router.push('/Profile')
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if (errorCode === "auth/user-not-found") {
          alert("Usuario no registrado");
        }
        if (errorCode === "auth/wrong-password") {
          alert("Contraseña incorrecta");
        }
      });
  }

  return (
    <>
      <div className={styles.fondo}>
        <div className={styles.login}>
          <div className={styles.formulario}>
            <Nav.Link href="#">
             
            </Nav.Link>
            <br></br>
            <h4 style={{ padding: "10px" }}>Ingresa con tu Email</h4>
            <p style={{ fontSize: "small" }}>Ingresá tus datos</p>
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
            <button
              type="submit"
              onClick={(e) => {
                Autenticacion();
              }}
              className={styles.botonContinuar}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={(e) => {
                router.push('/Register')
              }}
              className={styles.botonLogin}>
              Registrarme
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomLogin;