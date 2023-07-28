import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useUserContextProvider } from "@/Context/UserContextProvider";

//Para usar contexto
//Import useContext
//Importar el contexto a usar(ej MainContext)
//declarar la const donde traemos el dato usando useContext()
//Usamos un condicional para mostrar o no el usuario;

const Header = (props) => {

  // var { newUserName } = useUserContextProvider();
  
 
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
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} suppressHydrationWarning={true}>
              {/* Usuario: {`${newUserName}`} */}
                </Offcanvas.Title> 
              </Offcanvas.Header>
              <Offcanvas.Body>
             
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
