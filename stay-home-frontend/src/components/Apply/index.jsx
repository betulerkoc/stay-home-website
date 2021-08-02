import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./index.css";
import { Container } from "react-bootstrap";

export default function Apply() {
  return (
    <Container className="applicationContainer">
      <Card className="neumorphism justify-content-center flex-column align-items-center">
        <Card.Body>
          <h2 className="text-center mb-4">Apply for Patient</h2>
          <Form>
            <Form.Group className=" inputSize" id="numberOfFamilyMember">
              <Form.Label>Number of Family Members</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => console.log(e)}
                required
              />
            </Form.Group>
            <Form.Group id="numberOfStayingHome">
              <Form.Label>Number of Days Staying Home</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => console.log(e)}
                required
              />
            </Form.Group>
            <Form.Group id="typeOfNeed">
              <Form.Label>Type of Need</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group id="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Button
              className="w-100 applyButton"
              type="submit"
              variant="success"
            >
              Apply
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
