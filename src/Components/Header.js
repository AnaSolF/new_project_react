import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "../styles/header.module.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useContext } from "react";
import { useState } from "react";
import { useUserContextProvider } from "@/Context/UserContextProvider";

const Header = () => {
  var { usuario } = useUserContextProvider();
  var { setUsuario } = useUserContextProvider();

  let { nuevoUser } = useUserContextProvider();

  var newUserName = nuevoUser();
  console.log(newUserName);

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Pedí Ya</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Pedi Ya
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {[usuario].map((pro) => {
                  return (
                    <div key={pro.username}>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/Profile">
                          Bienvenido/a: {newUserName}
                        </Nav.Link>
                      </Nav>
                    </div>
                  );
                })}
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/CustomLogin">Ingresar</Nav.Link>
                  <Nav.Link href="/Register">Registrarme</Nav.Link>
                  <Nav.Link href="Cart">
                    <BsFillCartPlusFill />
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
