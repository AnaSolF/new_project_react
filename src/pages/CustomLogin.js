import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const CustomLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email)
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Container>
          <h2 style={{ textAlign: "center", paddingBottom: "50px" }}>
            Ingresar
          </h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => {
                  const { value } = e.target;
                  e.preventDefault;
                  setEmail(value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => {
                  const { value } = e.target;
                  e.preventDefault;
                  setPassword(value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default CustomLogin;
