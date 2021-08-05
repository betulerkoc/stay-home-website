import React, {useState} from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./index.css";
import { Container } from "react-bootstrap";

export default function Apply() {


  const [ApplyFields, setFeilds] = useState({
    NumberOfFamily: "",
    NumberOfDays: "",
    TypeOfNeed: "",
    Location: "",
  });

  const handleFieldChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setFeilds({...ApplyFields, [inputName]: value})
  }
  //on Submit
  const onSubmit = (e) =>{
    e.preventDefault()   //to submit on same page
  }

  return (
    <Container className="applicationContainer">
      <Card className="neumorphism justify-content-center flex-column align-items-center">
        <Card.Body>
          <h2 className="text-center mb-4">Apply for Patient</h2>
          <Form onSubmit={onSubmit}>
            <Form.Group className=" inputSize" id="numberOfFamilyMember">
              <Form.Label>Number of Family Members</Form.Label>
              <Form.Control
                type="text"
                name='NumberOfFamily'
                value={ApplyFields.NumberOfFamily}
                onChange={handleFieldChange}
                required
              />
            </Form.Group>
            <Form.Group id="numberOfStayingHome">
              <Form.Label>Number of Days Staying Home</Form.Label>
              <Form.Control
                type="text"
                name='NumberOfDays'
                value={ApplyFields.NumberOfDays}
                onChange={handleFieldChange}
                required
              />
            </Form.Group>
            <Form.Group id="typeOfNeed">
              <Form.Label>Type of Need</Form.Label>
              <Form.Control value={ApplyFields.TypeOfNeed}
               name='TypeOfNeed'
                onChange={handleFieldChange} type="text" required />
            </Form.Group>
            <Form.Group id="location">
              <Form.Label>Location</Form.Label>
              <Form.Control value={ApplyFields.Location}
              name='Location'
                onChange={handleFieldChange} type="text" required />
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
