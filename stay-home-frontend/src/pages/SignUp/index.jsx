import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import { Container } from "react-bootstrap";

export default function Signup() {
  return (
    <Container className="d-flex flex-column justify-content-center signUpContainer">
      <Card className="neumorphism justify-content-center flex-column align-items-center">
        <Card.Body>
          <h2 className="text-center mb-4 purpleElemSignUp">SignUp</h2>
          <Form>
            <Form.Group id="userEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => console.log(e, "name")}
                required
              />
            </Form.Group>
            <Form.Group id="userName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => console.log(e, "surname")}
                required
              />
            </Form.Group>
            <Form.Group id="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Form.Group id="userType">
              <Form.Label>User Type</Form.Label>
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Patient"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Volunteer"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Form>
            </Form.Group>

            <Button
              className="w-100 signUpButton"
              variant="success"
              type="submit"
            >
              Sign-up
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            Have an Account
            <Link className="otherLink" to="/login">
              Login
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
