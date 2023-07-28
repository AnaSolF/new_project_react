import React from "react";
import styles from "@/styles/Login.module.css";
import { Nav, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/InitConfig";
import { useRouter } from "next/router";

export default function CustomLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const router = useRouter("");

  function handleSubmit() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        handleRegister(email, password);
        const user = userCredential.user;
        console.log(user);
        if (user) {
          router.push("/CustomLogin");
        }
        alert("Registro exitoso");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.error(`Error (${errorCode}): ${errorMessage}`);
        if (errorCode === "auth/email-already-in-use") {
          alert("Verifique que su email no se encuentre registrado");
        }
        if (errorCode === "auth/missing-password") {
          alert("Password inválido");
        }
      });
  }

  function validateEmail(email) {
    // Validar el formato del correo electrónico utilizando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    // Validar contraseña
    return password.length >= 8 && password != null;
  }

  function handleRegister(email, password) {
    if (!validateEmail(email)) {
      alert("Ingrese un email válido");
    }

    if (!validatePassword(password)) {
      alert("Ingrese una contraseña de más de 8 caracteres");
    }
  }

  return (
    <>
      <div className={styles.fondo}>
        <div className={styles.login}>
          <div className={styles.formulario}>
            <Nav.Link href="#">
              Login
            </Nav.Link>
            <br></br>
            <h4 style={{ padding: "10px" }}>Registráte con tu Email</h4>
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
            {/* <p style={{ fontSize: "small", marginTop: "10px" }}>
            Olvidé mi contraseña
          </p> */}
            <Button
              type="submit"
              onClick={(e) => {
                handleSubmit({ email, password });
              }}
              className={styles.botonContinuar}
            >
              Registrarme
            </Button>
            <Button href="/CustomLogin" className={styles.botonLogin}>
              Ya tengo cuenta
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}