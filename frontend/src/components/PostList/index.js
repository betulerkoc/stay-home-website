import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../Post";
import "./index.css";

export default function PostList() {
  const [postData, setPostData] = useState([]);

  const getAllPosts = async () => {
    try {
      const fetchResponse = await fetch(
        `http://localhost:3001/patient-post`
      );
      const data = await fetchResponse.json();
      setPostData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Container>
      <Row>
        {postData.map((item, index) => {
          return (
            <Col key={index}>
              <Post postDetail={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
