/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from "react";
import { Card, Modal, Form, Button } from "react-bootstrap";
import "./index.css";
import { FaRegEdit, FaTimes } from "react-icons/fa";
import swal from "sweetalert";

export default function AppliedPost({ myPosts, getMyPosts }) {
  console.log(myPosts);

  const [isOpen, setIsOpen] = React.useState(false);
  const [updatedContent, setUpdatedContent] = useState("");

  useEffect(() => {}, [myPosts]);

  const showModal = (item) => {
    setIsOpen(true);
    setUpdatedContent(item);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setUpdatedContent({ ...updatedContent, [e.target.name]: e.target.value });
  };

  const deletePost = async (item) => {
    const settings = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const fetchResponse = await fetch(
        `http://localhost:3001/patient-post/del/${item.annotation_id}`,
        settings
      );
      console.log(fetchResponse);
      fetchResponse.status === 200
        ? swal("", "Post is successfully deleted", "success")
        : swal("", "Error", "error");
      getMyPosts();
    } catch (e) {
      console.log(e);
    }
  };

  const updatePost = async () => {
    console.log(updatedContent);
    const settings = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContent),
    };
    try {
      const fetchResponse = await fetch(
        `http://localhost:3001/patient-post/update`,
        settings
      );
      console.log(fetchResponse);
      fetchResponse.status === 200
        ? swal("", "Post is successfully updated", "success")
        : swal("", "Error", "error");
      getMyPosts();
      setIsOpen(false)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {myPosts ? (
        myPosts.map((item, index) => {
          return (
            <Card key={index} className="postCard">
              <FaRegEdit onClick={() => showModal(item)} />
              <FaTimes
                className="deleteButton"
                onClick={() => deletePost(item)}
              />
              <Card.Body>
                <Card.Text>Number of Family: {item.number_of_family}</Card.Text>
                <Card.Text>
                  Number of Days Staying Home: {item.number_of_days}
                </Card.Text>
                <Card.Text>Type of Need: {item.type_of_need}</Card.Text>
                <Card.Text>Location: {item.location}</Card.Text>
              </Card.Body>
              <Modal title="Update Content" show={isOpen} onHide={hideModal}>
                <Form className="formSize" onSubmit={() => updatePost()}>
                  <Form.Group id="numberOfFamilyMember">
                    <Form.Label>Number of Family Members</Form.Label>
                    <Form.Control
                      name="number_of_family"
                      type="text"
                      value={updatedContent.number_of_family}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="numberOfStayingHome">
                    <Form.Label>Number of Days Staying Home</Form.Label>
                    <Form.Control
                      name="number_of_days"
                      type="text"
                      value={updatedContent.number_of_days}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="typeOfNeed">
                    <Form.Label>Type of Need</Form.Label>
                    <Form.Control
                      name="type_of_need"
                      type="text"
                      value={updatedContent.type_of_need}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      name="location"
                      type="text"
                      value={updatedContent.location}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button
                    className="w-100 updateButton"
                    // type="submit"
                    variant="success"
                    onClick={() => updatePost()}
                  >
                    Update
                  </Button>
                </Form>
              </Modal>
            </Card>
          );
        })
      ) : (
        <Card className="warningCard">
          <Card.Body>
            <Card.Text>You have no posts at the moment!</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
