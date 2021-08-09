import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./index.css";
import { Container } from "react-bootstrap";
import swal from "sweetalert";

export default function Apply({ userId, getMyPosts }) {
  const [post, setNewPost] = useState({
    patient_id: userId,
    number_of_family: "",
    number_of_days: "",
    type_of_need: "",
    location: "",
  });

  const handleChange = (e) => {
    setNewPost({ ...post, [e.target.name]: e.target.value });
    console.log(post);
  };

  const handlAddPost = async (e) => {
    e.preventDefault();
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    };

    try {
      const fetchResponse = await fetch(
        `http://localhost:3001/patient-post`,
        settings
      );
      fetchResponse.status === 200
        ? swal("", "Post is successfully added", "success")
        : swal("", "Error", "error");
      getMyPosts();
    } catch (e) {
      return e;
    }
    setNewPost({
      number_of_family: "",
      number_of_days: "",
      type_of_need: "",
      location: "",
    });
  };

  return (
    <Container className="applicationContainer">
      <Card className="neumorphism justify-content-center flex-column align-items-center">
        <Card.Body>
          <h2 className="text-center mb-4">Apply for Patient</h2>
          <Form onSubmit={handlAddPost}>
            <Form.Group className="inputSize" id="numberOfFamilyMember">
              <Form.Label>Number of Family Members</Form.Label>
              <Form.Control
                name="number_of_family"
                type="text"
                value={post.number_of_family}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group id="numberOfStayingHome">
              <Form.Label>Number of Days Staying Home</Form.Label>
              <Form.Control
                name="number_of_days"
                type="text"
                value={post.number_of_days}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group id="typeOfNeed">
              <Form.Label>Type of Need</Form.Label>
              <Form.Control
                name="type_of_need"
                type="text"
                value={post.type_of_need}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group id="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                name="location"
                type="text"
                value={post.location}
                onChange={handleChange}
                required
              />
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
