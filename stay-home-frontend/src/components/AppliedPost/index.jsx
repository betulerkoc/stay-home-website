/* eslint-disable react/jsx-one-expression-per-line */
import React, {useState} from "react";
import { Card, Modal } from "react-bootstrap";
import "./index.css";
import { FaRegEdit, FaTimes } from "react-icons/fa";

export default function AppliedPost() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updatedContent, setUpdatedContent] = useState("");

  const handleOk = () => {
    setIsModalVisible(false);
    updateNote();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const updateNote = () => {
    console.log("updatedContent");
    console.log("currentIndex");
  };

  const postDetails = {
    numberOfFamily: 4,
    numberOfDays: 7,
    typeOfNeed: "food",
    location: "istanbul",
  };

  return (
    <Card className="postCard">
      <FaRegEdit onClick={() => showModal()}/>
      <FaTimes onClick={() => console.log("Will delete")} />
      <Card.Body>
        <Card.Text>Number of Family: {postDetails.numberOfFamily}</Card.Text>
        <Card.Text>
          Number of Days Staying Home: {postDetails.numberOfDays}
        </Card.Text>
        <Card.Text>Type of Need: {postDetails.typeOfNeed}</Card.Text>
        <Card.Text>Location: {postDetails.location}</Card.Text>
      </Card.Body>

      <Modal
        title="Update Content"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Update"
      >
        <input
          placeholder="Update note content"
          value={updatedContent}
          onChange={(e) => setUpdatedContent(e.target.value)}
        />
      </Modal>

    </Card>
  );
}
