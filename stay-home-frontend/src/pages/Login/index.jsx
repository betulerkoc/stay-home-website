import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

export default function Login() {
  return (
    <Container className="d-flex flex-column justify-content-center loginContainer">
      <Card className="neumorphism justify-content-center flex-column align-items-center ">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <div className="loginBtns">
              <Button className="loginButton" type="submit" variant="success">
                Login
              </Button>
            </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <div className="w-100 text-center mt-2">
              No account yet
              <Link className="otherLink" to="/signup">
                Sign-up
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
