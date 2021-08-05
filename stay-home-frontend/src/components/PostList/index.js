import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../Post";
import "./index.css";

export default function PostList() {
  const mockPostList = [
    {
      volunterId: 1,
      numberOfFamily: 4,
      numberOfDays: 7,
      typeOfNeed: "food",
      location: "istanbul",
    },
    {
      volunterId: 2,
      numberOfFamily: 4,
      numberOfDays: 7,
      typeOfNeed: "food",
      location: "istanbul",
    },
    {
      volunterId: 3,
      numberOfFamily: 4,
      numberOfDays: 7,
      typeOfNeed: "food",
      location: "istanbul",
    },
  ];

  const [post, setNewPost] = useState([]);

  const getAllPosts = async (e) => {
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
      const data = await fetchResponse.json();
      console.log(data);
      setNewPost(data.post);
      // return data;
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getAllPosts();
  }, [post]);

  return (
    <Container fluid="lg">
      <Row>
        {mockPostList.map((item) => {
          return (
            <Col>
              <Post postDetail={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
