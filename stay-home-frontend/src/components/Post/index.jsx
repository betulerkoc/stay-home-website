/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
// import { Col } from "react-bootstrap";
import { Card, Button, Modal } from "react-bootstrap";
import { FaTimes, FaCheck } from "react-icons/fa";
import "./index.css";

export default function Post({ postDetail }) {
  console.log(postDetail);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // we should get postDetail.patientId --- accourding to id response, we can get contact information

  return (
    <div>
      <Card border="secondary" className="postCard">
        <Card.Body>
          <Card.Text>Number of Family: {postDetail.number_of_family}</Card.Text>
          <Card.Text>
            Number of Days Staying Home: {postDetail.number_of_days}
          </Card.Text>
          <Card.Text>Type of Need: {postDetail.type_of_need}</Card.Text>
          <Card.Text>Location: {postDetail.location}</Card.Text>
          <Card.Text>
            Application Status:{" "}
            {postDetail.isApplied ? <FaTimes /> : <FaCheck />}
          </Card.Text>
        </Card.Body>
        {postDetail.isApplied ? (
          <Button variant="success" onClick={handleShow} disabled>
            Apply
          </Button>
        ) : (
          <Button variant="success" onClick={handleShow}>
            Apply
          </Button>
        )}
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Contact Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>E-mail: </Modal.Body>
        <Modal.Body>Phone: </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
