/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FaTimes, FaCheck } from "react-icons/fa";
import "./index.css";

export default function Post({ postDetail }) {
  //console.log(postDetail);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(postDetail.isApplied)
  const [postOwnerID, setOwnerID] = useState(null);
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phoneNumber: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    SendApplied(postDetail.annotation_id);
    setShow(true);
  };

  useEffect(() => {
    getContactInfo();
  }, [postOwnerID]);

  async function SendApplied(postID) {
    const obj = { postID: postID };
    let result = await fetch("http://localhost:3001/volunteer-applied", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    //console.log(result)
    await setOwnerID(result.postOwnerID);
    setStatus(true);
    console.log("OwnerID of this post is", postOwnerID);
  }

  async function getContactInfo() {
    console.log("post owner id in api function is :", postOwnerID);
    try {
      let result = await fetch(
        `http://localhost:3001/contact-info/${postOwnerID}`,
      );
      result = await result.json();
      console.log("The contact info after fetching", result);
      result &&
        setContactInfo({
          email: result.email,
          phoneNumber: result.phoneNumber,
        });
    } catch (e) {
      console.log(e);
    }
    let result = await fetch(
      `http://localhost:3001/contact-info/${postOwnerID}`,
    );
    result = await result.json();
   
    console.log("The contact info after fetching", result);
    await setContactInfo({
      email: result.email,
      phoneNumber: result.phoneNumber,
    });
  }
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
            {status ? <FaTimes /> : <FaCheck />}
          </Card.Text>
        </Card.Body>
        {status ? (
          <Button variant="success" onClick={handleShow}>
            See Details
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
        <Modal.Body>E-mail: {contactInfo.email} </Modal.Body>
        <Modal.Body>Phone: {contactInfo.phoneNumber} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
