import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const CustomLogin = () => {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Container>
          <h2 style={{ textAlign: "center", paddingBottom: "50px" }}>
            Ingresar
          </h2>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <Button variant="primary" type="submit" style={{ float: "right", marginTop:"50px" }}>
            Submit
          </Button>
        </Container>
      </div>
    </>
  );
};

export default CustomLogin;
