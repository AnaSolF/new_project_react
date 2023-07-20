import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "../styles/header.module.css"
import { BsFillCartPlusFill } from "react-icons/bs";
import { useContext } from 'react';
import { MainContext } from '@/Context/MainContextProvider'

const Header = () => {
    const defaultState = useContext(MainContext);
    return (
            <>
                {['lg'].map((expand) => (
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
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="#action1">Ingresar</Nav.Link>
                                        <Nav.Link href="#action2"><BsFillCartPlusFill /></Nav.Link>
                                       
                                    </Nav>
                                  
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
        );
    }


export default Header