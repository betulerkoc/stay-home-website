import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

export default function Login() {
  return (
    <div>
      <Card
        className="neumorphism justify-content-center flex-column align-items-center "
        style={{ marginTop: "4em" }}
      >
        <Card.Body className="purpleElemLogin">
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group className="purpleElemLogin inputSize" id="email">
              <Form.Label>e-mail</Form.Label>
              <Form.Control className="purpleElemLogin" type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="purpleElemLogin">Password</Form.Label>
              <Form.Control
                className="purpleElemLogin"
                type="password"
                required
              />
            </Form.Group>
            <div className="loginBtns">
              <Button className="logInBtn" type="submit">
                Login
              </Button>
            </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <div className="w-100 text-center mt-2 purpleElemLogin">
              No account yet
              <Link className="greenElemLogin" to="/signup">
                Sign-up
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
