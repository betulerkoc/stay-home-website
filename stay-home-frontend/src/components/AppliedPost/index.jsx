/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Card } from "react-bootstrap";
import "./index.css";
import { FaRegEdit, FaTimes } from "react-icons/fa";

export default function AppliedPost() {
  const postDetails = {
    numberOfFamily: 4,
    numberOfDays: 7,
    typeOfNeed: "food",
    location: "istanbul",
  };

  return (
    <Card className="postCard">
      <FaRegEdit onClick={() => console.log("Will edit")} />
      <FaTimes onClick={() => console.log("Will delete")} />
      <Card.Body>
        <Card.Text>Number of Family: {postDetails.numberOfFamily}</Card.Text>
        <Card.Text>
          Number of Days Staying Home: {postDetails.numberOfDays}
        </Card.Text>
        <Card.Text>Type of Need: {postDetails.typeOfNeed}</Card.Text>
        <Card.Text>Location: {postDetails.location}</Card.Text>
      </Card.Body>
    </Card>
  );
}
