import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { useUserContextProvider } from "@/Context/UserContextProvider";
import { useRouter } from 'next/router'
const Register = () => {

  //Traigo las funciones set desde el contexto, para tomar los valores ingresados por el input y poder setear la variable usuario y almacenar en localStorage (después, usar los mismos values para post a base de datos)

  var { usuario } = useUserContextProvider();

  let { saludo } = useUserContextProvider();

  let { nuevoUsuario } = useUserContextProvider();

  let { setEmail } = useUserContextProvider();

  let { setPass } = useUserContextProvider();

  let { setUsername } = useUserContextProvider();

  let { setAvatarUrl } = useUserContextProvider();

  let { setAddress } = useUserContextProvider();

  let { setState } = useUserContextProvider();

  let { setZip } = useUserContextProvider();

  let { guardar } = useUserContextProvider();
  
  let  { getUser } = useUserContextProvider();

  const router = useRouter();

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePass = (value) => {
    setPass(value);
  };

  const handleChangeUsername = (value) => {
    setUsername(value);
  };
  const handleChangeAvatar = (value) => {
    setAvatarUrl(value);
  };

  const handleChangeAddress = (value) => {
    setAddress(value);
  };

  const handleChangeState = (value) => {
    setState(value);
  };

  const handleChangeZip = (value) => {
    setZip(value);
  };

  const LoadNewUser = () => {
    guardar()
    router.push("/Profile");
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Container>
        <h2 style={{ textAlign: "center", paddingBottom: "50px" }}></h2>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
                value={usuario.email}
                onChange={(e) => {
                  const { value } = e.target;
                  handleChangeEmail(value);
                  e.preventDefault;
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
                value={usuario.password}
                onChange={(e) => {
                  const { value } = e.target;
                  handleChangePass(value);
                  e.preventDefault;
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridUser">
            <Form.Label>User</Form.Label>
            <Form.Control
              placeholder="Username"
              type="text"
              name="username"
              required
              value={usuario.username}
              onChange={(e) => {
                const { value } = e.target;
                handleChangeUsername(value);
                e.preventDefault;
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              required
              type="text"
              name="address"
              value={usuario.address}
              onChange={(e) => {
                const { value } = e.target;
                handleChangeAddress(value);
                e.preventDefault;
              }}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                placeholder="State"
                type="text"
                name="state"
                value={usuario.state}
                onChange={(e) => {
                  const { value } = e.target;
                  handleChangeState(value);
                  e.preventDefault;
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                placeholder="Zip"
                type="number"
                name="zip"
                value={usuario.zip}
                onChange={(e) => {
                  const { value } = e.target;
                  handleChangeZip(value);
                  e.preventDefault;
                }}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            variant="primary"
            //type="submit"
            onClick={(e) => {
              LoadNewUser();
            }}
            style={{ float: "right" }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
