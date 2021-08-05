/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
// import { Col } from "react-bootstrap";
import { Card, Button, Modal } from "react-bootstrap";
import "./index.css";

export default function Post({ postDetail }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // we should get postDetail.patientId --- accourding to id response, we can get contact information

  return (
    <div>
      <Card border="secondary" className="postCard">
        <Card.Body>
          <Card.Text>Number of Family: {postDetail.numberOfFamily}</Card.Text>
          <Card.Text>
            Number of Days Staying Home: {postDetail.numberOfDays}
          </Card.Text>
          <Card.Text>Type of Need: {postDetail.typeOfNeed}</Card.Text>
          <Card.Text>Location: {postDetail.location}</Card.Text>
        </Card.Body>
        <Button variant="success" onClick={handleShow}>
          Apply
        </Button>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Contact Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>E-mail:  </Modal.Body>
        <Modal.Body>Phone:  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
